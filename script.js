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

        // 電影遮色片退去
        darkOverlay.style.opacity = 0.6 * (1 - progress);

        // 🍏 文字淡入：當滾動超過 30% 時，開始平滑浮現，並在接近第二幕時達到 100% 顯色
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

        // 🍏 關鍵修正：讓「這是哪裡」在第二幕的前半段（過渡進度 0.5 以前）死死維持 100% 顯色！
        // 只有當讀者再用力往下滾動，準備進入地圖幕（stage2Progress > 0.5）時，才跟著公路背景一併淡出
        if (stage2Progress < 0.5) {
            locationHint.style.opacity = 1;
        } else {
            locationHint.style.opacity = 1 - (stage2Progress - 0.5) * 2;
        }

        // 公路背景相片線性淡出
        bgPhoto.style.opacity = 1 - stage2Progress;
    }
});