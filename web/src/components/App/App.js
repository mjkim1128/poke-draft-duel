import { Home } from 'components';
import { Settings } from 'components/Settings/Settings';
import { onLangChange } from 'shared/lang';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { subscribeServerStatus, startKeepAlive } from 'shared/serverStatus';

// 서버 상태별 안내 문구. "ok"일 때는 아무것도 보여 주지 않는다.
const BANNERS = {
  waking: {
    background: '#fff3cd',
    text: '서버를 깨우는 중입니다. 한동안 아무도 접속하지 않아 잠들어 있던 서버라 1~3분 걸릴 수 있어요. 이 화면을 닫지 말고 기다려 주세요.',
  },
  failed: {
    background: '#f8d7da',
    text: '서버에 연결하지 못했습니다. 잠시 뒤 페이지를 새로고침해 주세요. (진행 중이던 연승 기록은 사라집니다)',
  },
};

export function App() {
  const [serverState, setServerState] = useState('ok');
  const [, setLangVersion] = useState(0);

  // 언어를 바꾸면 화면 전체를 다시 그려 이름이 바로 바뀌게 한다 (게임 상태는 그대로)
  useEffect(() => onLangChange(() => setLangVersion((v) => v + 1)), []);

  useEffect(() => subscribeServerStatus(setServerState), []);
  useEffect(() => startKeepAlive(), []);

  const banner = BANNERS[serverState];

  return (
    <div className={styles.main}>
      {banner && (
        <div
          role="status"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '10px 16px',
            textAlign: 'center',
            fontSize: '14px',
            background: banner.background,
            borderBottom: '1px solid #00000022',
          }}
        >
          {banner.text}
        </div>
      )}
      <Settings />
      <Home />
    </div>
  );
}
