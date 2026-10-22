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
        // 브라우저에 따라 미디어 쿼리 변경 알림이 오지 않는 경우가 있어서, 창 크기 변경도 같이 듣는다.
        // 오래된 사파리(iOS 13 이하)에는 addEventListener가 없고 addListener만 있다. 없을 때 그냥
        // 부르면 화면이 하얗게 멈추므로, 있는 쪽을 쓴다.
        if (media.addEventListener) media.addEventListener("change", update);
        else if (media.addListener) media.addListener(update);
        window.addEventListener("resize", update);
        return () => {
            if (media.removeEventListener) media.removeEventListener("change", update);
            else if (media.removeListener) media.removeListener(update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return portrait;
}

// 컴퓨터(가로로 넓은) 화면에서도 세로 배치를 쓸지. 끄고 싶으면 false로 바꾸고,
// 각 컴포넌트 CSS의 "@media all"을 예전 조건(PORTRAIT_QUERY와 같은 조건)으로 되돌린다.
export const COMPACT_LAYOUT_EVERYWHERE = true;

export function useCompactLayout() {
    const portrait = usePortrait();
    return COMPACT_LAYOUT_EVERYWHERE || portrait;
}
