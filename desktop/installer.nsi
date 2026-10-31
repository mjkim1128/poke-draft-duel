; Poke Draft Duel 설치 마법사 (NSIS). make-release.mjs가 VERSION, SRC_DIR(실행 파일과 resources.neu가 있는 폴더), OUT_FILE을 넘겨서 만든다.
Unicode true
!include "MUI2.nsh"

!define APP_NAME "Poke Draft Duel"
!define APP_EXE "poke-draft-duel-win_x64.exe"
!define UNINSTALL_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\PokeDraftDuel"

Name "${APP_NAME}"
OutFile "${OUT_FILE}"
; 관리자 권한 없이 내 계정에만 설치한다 (UAC 창이 뜨지 않는다)
RequestExecutionLevel user
InstallDir "$LOCALAPPDATA\Programs\${APP_NAME}"
InstallDirRegKey HKCU "Software\PokeDraftDuel" "InstallDir"
SetCompressor /SOLID lzma
BrandingText "${APP_NAME} ${VERSION}"

!define MUI_ICON "${SRC_DIR}\app.ico"
!define MUI_UNICON "${SRC_DIR}\app.ico"
!define MUI_ABORTWARNING
!define MUI_FINISHPAGE_RUN "$INSTDIR\${APP_EXE}"
!define MUI_FINISHPAGE_RUN_TEXT "${APP_NAME} 지금 실행"

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "Korean"

Section "Install"
    SetOutPath "$INSTDIR"
    ; 실행 중이면 덮어쓸 수 없으니 먼저 알려 준다
    File "${SRC_DIR}\${APP_EXE}"
    File "${SRC_DIR}\resources.neu"
    File "${SRC_DIR}\app.ico"
    WriteUninstaller "$INSTDIR\Uninstall.exe"

    CreateDirectory "$SMPROGRAMS\${APP_NAME}"
    CreateShortcut "$SMPROGRAMS\${APP_NAME}\${APP_NAME}.lnk" "$INSTDIR\${APP_EXE}" "" "$INSTDIR\app.ico"
    CreateShortcut "$SMPROGRAMS\${APP_NAME}\제거.lnk" "$INSTDIR\Uninstall.exe"
    CreateShortcut "$DESKTOP\${APP_NAME}.lnk" "$INSTDIR\${APP_EXE}" "" "$INSTDIR\app.ico"

    WriteRegStr HKCU "Software\PokeDraftDuel" "InstallDir" "$INSTDIR"
    WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayName" "${APP_NAME}"
    WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayVersion" "${VERSION}"
    WriteRegStr HKCU "${UNINSTALL_KEY}" "DisplayIcon" "$INSTDIR\app.ico"
    WriteRegStr HKCU "${UNINSTALL_KEY}" "UninstallString" '"$INSTDIR\Uninstall.exe"'
    WriteRegStr HKCU "${UNINSTALL_KEY}" "InstallLocation" "$INSTDIR"
    WriteRegDWORD HKCU "${UNINSTALL_KEY}" "NoModify" 1
    WriteRegDWORD HKCU "${UNINSTALL_KEY}" "NoRepair" 1
SectionEnd

Section "Uninstall"
    Delete "$INSTDIR\${APP_EXE}"
    Delete "$INSTDIR\resources.neu"
    Delete "$INSTDIR\app.ico"
    Delete "$INSTDIR\Uninstall.exe"
    RMDir "$INSTDIR"
    Delete "$SMPROGRAMS\${APP_NAME}\${APP_NAME}.lnk"
    Delete "$SMPROGRAMS\${APP_NAME}\제거.lnk"
    RMDir "$SMPROGRAMS\${APP_NAME}"
    Delete "$DESKTOP\${APP_NAME}.lnk"
    DeleteRegKey HKCU "${UNINSTALL_KEY}"
    DeleteRegKey HKCU "Software\PokeDraftDuel"
SectionEnd
