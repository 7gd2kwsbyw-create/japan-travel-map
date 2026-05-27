window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 計算總滾動進度 (0 到 2 之間)
    const progress = Math.min(scrollY / windowHeight, 2);

    const mainTitle = document.getElementById('main-title');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');

    // 階段一：從第一幕滑到第二幕 (0vh ➔ 100vh)
    if (progress <= 1) {
        // 主標題淡出
        mainTitle.style.opacity = 1 - progress;
        mainTitle.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;

        // 電影遮色片退去，露出純淨公路
        darkOverlay.style.opacity = 0.6 * (1 - progress);

        // 「這是哪裡」文字淡入
        if (progress > 0.3) {
            locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
        } else {
            locationHint.style.opacity = 0;
        }
        
        bgPhoto.style.opacity = 1;
    } 
    // 階段二：從第二幕滑到第三幕地圖 (100vh ➔ 200vh)
    else if (progress > 1 && progress <= 2) {
        const stage2Progress = progress - 1; // 轉化為 0 到 1 的區間

        // 確保第一幕元素乾淨消失
        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;

        // 🍏 核心優化：拉長第二幕的停留時間
        // 我們讓 stage2Progress 在 0.4（相當於滾動了 40% 的緩衝距離）之前，
        // 公路背景（bgPhoto）與「這是哪裡」（locationHint）都死死維持 100% 顯色，完全不動！
        if (stage2Progress < 0.4) {
            locationHint.style.opacity = 1;
            bgPhoto.style.opacity = 1;
        } 
        // 🍏 超過 0.4 之後，才在剩下的 60% 距離內快速且優雅地淡出，交棒給底層地圖
        else {
            const fadeProgress = (stage2Progress - 0.4) / 0.6; // 重新標準化為 0~1 的淡出進度
            locationHint.style.opacity = 1 - fadeProgress;
            bgPhoto.style.opacity = 1 - fadeProgress;
        }
    }
});