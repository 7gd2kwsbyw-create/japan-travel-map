window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 總滾動進度 0 到 4 (代表 500vh 的五幕空間)
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitle = document.getElementById('main-title');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    // 初始防線：在進度還沒超過 300vh (progress <= 3) 之前，地圖強制完全隱形
    if (progress <= 3) {
        mapContainer.style.opacity = 0;
        mapContainer.style.pointerEvents = 'none';
    }

    // 第一幕：0vh ➔ 100vh（首頁文字與黑霧自然淡出）
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
    // 第二幕 & 第三幕：100vh ➔ 300vh（純相片與文字 100% 凍結定格，極致純淨的公路凝視）
    else if (progress > 1 && progress <= 3) {
        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;
        
        locationHint.style.opacity = 1;
        bgPhoto.style.opacity = 1;
    } 
    // 第四幕：300vh ➔ 400vh（地圖與公路相片正式進行最完美的自然溶接）
    else if (progress > 3) {
        const stage4Progress = progress - 3; // 區間完美對應 0 到 1

        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;

        // 公路背景與小字自然淡出 (1 ➔ 0)
        locationHint.style.opacity = 1 - stage4Progress;
        bgPhoto.style.opacity = 1 - stage4Progress;

        // 地圖登場隨滾輪推進自然淡入 (0 ➔ 1)
        mapContainer.style.opacity = stage4Progress;
        if (stage4Progress > 0.9) {
            mapContainer.style.pointerEvents = 'auto';
        }
    }
});