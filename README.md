# Battle Factory (배포용)

포켓몬 배틀 팩토리 웹게임. React 게임(`web/`)과 Spring Boot 서버(`api/`)를 컨테이너 하나로 묶어 배포한다.

```
브라우저 ──▶ Spring Boot 서버 하나
              ├ /        React 빌드 결과 (정적 파일)
              └ /api/... API  (H2 메모리 DB, 서버가 켜질 때 시드 JSON으로 채움)
```

## 폴더

| 폴더 | 내용 |
|---|---|
| `web/` | 게임(React, Create React App). 개발 중에는 `package.json`의 `proxy`가 `/api`를 서버(8080)로 넘겨 준다 |
| `api/` | 서버(Spring Boot 4, Java 21). 포켓몬, 기술, 도구, 팩토리 세트를 DB에 올려 API로 제공 |
| `Dockerfile` | 3단계 빌드: React 빌드 → 서버 jar(React 포함) → 실행 이미지(클래스 캐시 포함) |

## 로컬에서 돌려 보기

서버와 게임을 따로 띄우는 개발 방식:

```bash
cd api && ./gradlew bootRun        # 서버 (8080)
cd web && npm ci && npm start      # 게임 (3000), /api 요청은 서버로 전달됨
```

배포와 같은 방식(서버 하나)으로 확인하기:

```bash
cd web && npm ci && npm run build
# web/build 안의 내용을 api/src/main/resources/static/ 으로 복사한 뒤
cd api && ./gradlew bootJar
PORT=8099 SPRING_PROFILES_ACTIVE=prod java -jar build/libs/*-SNAPSHOT.jar
# http://localhost:8099 에서 게임과 API가 같이 동작한다
```

Docker가 있다면:

```bash
docker build -t battlefactory .
docker run -p 8080:10000 -e PORT=10000 battlefactory
```

## 데이터를 고치고 싶을 때

| 바꾸고 싶은 것 | 방법 |
|---|---|
| 등장 포켓몬(풀), 종족별 세트 | `api/tools/source/`의 `eligible_pokemon_ids.json`, `species_factory_sets.js`를 고친 뒤 `cd api && node tools/build-sets-seed.mjs` (결과를 검증한 뒤 `src/main/resources/data/`에 씀) |
| 포켓몬, 기술, 도구 원본 데이터 | `node tools/build-seed-from-pokeapi.mjs <게임의 src/shared 폴더>` 로 PokeAPI에서 다시 받아 `seed/`에 만들고, 결과를 `src/main/resources/data/`로 복사 |
| 배경음악 | `web/public/bgm/`의 mp3를 쓴다: 선출·교체 화면은 `select1/2.mp3`, 일반 배틀은 `battle1/2.mp3`, 네임드 보스는 `boss1/2.mp3` 중 하나를 화면에 들어올 때마다 무작위로 고른다(`web/src/audio/bgm.js`의 `FILE_SONGS`). 파일을 못 불러오면 `web/src/audio/songs.js`의 8비트 곡이 대신 나오고, 타이틀·승리·패배는 늘 8비트 곡이다 |

## Render에 올리기

| 항목 | 값 |
|---|---|
| New + → Web Service | 이 저장소 선택 |
| Language | **Docker** (Render는 Java를 기본 지원하지 않아 Docker로 올린다) |
| Dockerfile Path | 저장소 루트의 `Dockerfile` (기본값) |
| Instance Type | Free (무료 플랜: 512MB RAM, 15분 동안 요청이 없으면 잠듦. 정책은 가입 시점에 Render 문서로 확인) |
| 환경변수 | 기본값으로 충분. 필요하면 `JAVA_TOOL_OPTIONS`(JVM 옵션), `USE_CDS=false`(클래스 캐시 끄기) |

## 서버가 잠들었을 때 (Render 무료 플랜)

15분 동안 서버로 요청이 없으면 서버가 잠든다. 전투 중에는 서버 요청이 없어서, 오래 자리를 비우면 잠들 수 있다. 게임 쪽에 두 가지 대비가 있다 (`web/src/shared/serverStatus.js`).

| 장치 | 동작 |
|---|---|
| 재시도 + 안내 | 서버 요청이 실패하거나 서버 대신 로딩 페이지(HTML)나 5xx가 오면, 3초마다 최대 4분까지 다시 시도한다. 5초 넘게 걸리면 화면 위에 "서버를 깨우는 중" 안내가 뜨고, 끝내 실패하면 "새로고침해 주세요" 안내가 뜬다 |
| 유지 요청 | 게임 화면이 보이는 동안 10분마다 `/api/ping`을 호출해 서버가 잠들지 않게 한다. 탭이 숨겨진 동안은 보내지 않고, 다시 보이는 순간 한 번 보내 (잠들었다면) 서버를 미리 깨운다 |

테스트용으로 시간을 줄이고 싶으면 빌드 전에 환경변수를 줄 수 있다: `REACT_APP_KEEPALIVE_MS`, `REACT_APP_SLOW_AFTER_MS`, `REACT_APP_RETRY_LIMIT_MS` (밀리초).
Render의 Health Check Path에는 `/api/ping`을 쓸 수 있다.

## 저사양 서버 측정 결과 (이 PC에서 CPU를 제한해 흉내 낸 값)

서버를 CPU 0.1코어, 메모리 512MB로 제한해서 첫 응답까지 걸린 시간이다. 한 번씩 잰 값이고, 실제 Render와는 다를 수 있다.

| 조건 | 첫 응답까지 | 메모리 최대 |
|---|---|---|
| 제한 없음 | 7.5초 | 376MB |
| 0.1 CPU, 기본 옵션 | 218초 | 380MB |
| 0.1 CPU, JVM 옵션 튜닝 | 101초 | 316MB |
| 0.1 CPU, 튜닝 + 데이터를 웹 서버보다 먼저 적재 | 81초 | 316MB |
| 0.1 CPU, 위 + 클래스 캐시(AppCDS) | **54초** | **298MB** |

효과가 없어서 쓰지 않은 옵션: 지연 초기화(`spring.main.lazy-initialization`)와 배치 삽입은 오히려 약간 느려지거나 차이가 없었다.

## 알아둘 점

- 이 게임의 코드는 원본 저장소(`andrewjuers/battlefactory`)에 라이선스가 없고, 포켓몬은 상표와 저작권이 있는 IP다. **지인에게만 주소를 알려 쓰는 용도**로 둔다.
- 서버는 켜질 때마다 DB를 시드로 새로 채운다(메모리 DB). 재시작해도 데이터가 사라지는 문제는 없다.
- Render 무료 플랜은 15분 동안 요청이 없으면 잠들고, 다시 깨어나는 데 시간이 걸린다. 첫 접속자는 기다려야 한다.
- H2 콘솔은 개발에서만 켜진다. `prod` 프로필(`SPRING_PROFILES_ACTIVE=prod`)에서는 꺼진다.
