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
        mainTitle.style.opacity = 1 - progress;
        mainTitle.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
        darkOverlay.style.opacity = 0.6 * (1 - progress);

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

        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;

        // 🍏 核心修改：將 0.8 改為 0.95
        // 讓第二幕在過渡進度 95% 之前，全部死死維持 100% 顯色，呈現長久的公路凝視感
        if (stage2Progress < 0.95) {
            locationHint.style.opacity = 1;
            bgPhoto.style.opacity = 1;
        } 
        // 🍏 超過 95% 之後，在最後極致壓縮的 5%（0.05）距離內瞬間淡出
        else {
            const fadeProgress = (stage2Progress - 0.95) / 0.05; // 🍏 分母同步改為 0.05 進行等比急速映射
            locationHint.style.opacity = 1 - fadeProgress;
            bgPhoto.style.opacity = 1 - fadeProgress;
        }
    }
});