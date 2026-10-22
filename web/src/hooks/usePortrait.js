import { useEffect, useState } from "react";

// 세로로 긴 화면(폰, 세로로 길게 줄인 브라우저 창)이거나 아주 좁은 화면일 때 참
export const PORTRAIT_QUERY = "(max-aspect-ratio: 1/1), (max-width: 640px)";

const matches = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(PORTRAIT_QUERY).matches;

export function usePortrait() {
    const [portrait, setPortrait] = useState(matches);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const media = window.matchMedia(PORTRAIT_QUERY);
        const update = () => setPortrait(matches());
        update();
        // 브라우저에 따라 미디어 쿼리 변경 알림이 오지 않는 경우가 있어서, 창 크기 변경도 같이 듣는다
        media.addEventListener("change", update);
        window.addEventListener("resize", update);
        return () => {
            media.removeEventListener("change", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return portrait;
}
