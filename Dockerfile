# Battle Factory: React(web) + Spring Boot(api)를 컨테이너 하나로 묶는다.
#
#   빌드:  docker build -t battlefactory .
#   실행:  docker run -p 8080:10000 -e PORT=10000 battlefactory
#   (Render는 PORT 환경변수를 알아서 넣어 준다. 서버는 PORT를 읽고, 없으면 8080을 쓴다.)

# ---- 1) React 빌드 ----
FROM node:20-slim AS web
WORKDIR /web
COPY web/package.json web/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY web/ ./
ENV CI=false
RUN npm run build

# ---- 2) Spring Boot jar (React 빌드 결과를 static 폴더에 넣어서 함께 묶는다) ----
FROM eclipse-temurin:21-jdk AS api
WORKDIR /api
COPY api/ ./
COPY --from=web /web/build/ src/main/resources/static/
RUN chmod +x gradlew && ./gradlew --no-daemon bootJar -x test

# ---- 3) 실행 ----
FROM eclipse-temurin:21-jre

# 작은 서버(메모리 512MB, CPU 0.1~)에서 돌리기 위한 JVM 옵션.
# Render 대시보드의 환경변수로 같은 이름을 넣으면 덮어쓸 수 있다.
ENV SPRING_PROFILES_ACTIVE=prod \
    JAVA_TOOL_OPTIONS="-Xmx192m -XX:+UseSerialGC -XX:TieredStopAtLevel=1 -Xss512k -XX:MaxMetaspaceSize=128m -XX:ReservedCodeCacheSize=48m -Dspring.jmx.enabled=false"

COPY --from=api /api/build/libs/*-SNAPSHOT.jar /tmp/app.jar

# jar를 lib/ + app.jar로 풀어 둔다 (클래스 캐시를 만들려면 이 모양이어야 한다)
RUN java -Djarmode=tools -jar /tmp/app.jar extract --destination /app && rm /tmp/app.jar

# 클래스 캐시(AppCDS) 만들기: 서버를 한 번 띄웠다 끄면서 로딩된 클래스 목록을 파일(app.jsa)로 저장한다.
# 이 파일이 있으면 느린 CPU에서 서버가 켜지는 시간이 줄어든다.
# (0.1 CPU로 제한해 본 측정: 첫 응답까지 약 81초 -> 약 54초, 메모리 최대 316MB -> 298MB)
# 반드시 실행할 때와 같은 폴더(/app)에서, 같은 이름(app.jar)으로 실행해야 캐시가 인정된다.
# 실패해도 빌드는 계속된다 (캐시 없이도 서버는 동작한다).
WORKDIR /app
RUN (java -XX:ArchiveClassesAtExit=/app/app.jsa -Dspring.context.exit=onRefresh -jar app.jar || true)

# USE_CDS=false 환경변수를 주면 캐시를 쓰지 않는다 (메모리를 조금 아끼고 싶을 때).
ENTRYPOINT ["sh", "-c", "if [ \"$USE_CDS\" != \"false\" ] && [ -f /app/app.jsa ]; then exec java -XX:SharedArchiveFile=/app/app.jsa -jar app.jar; else exec java -jar app.jar; fi"]
