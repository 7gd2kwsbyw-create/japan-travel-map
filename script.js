window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 將總滾動進度擴充改為 0 到 3 之間 (代表 400vh 的總旅程)
    const progress = Math.min(scrollY / windowHeight, 3);

    const mainTitle = document.getElementById('main-title');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');

    // 🍏 第一幕：0vh ➔ 100vh（首頁文字與黑霧淡出）
    if (progress <= 1) {
        mainTitle.style.opacity = 1 - progress;
        mainTitle.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
        darkOverlay.style.opacity = 0.6 * (1 - progress);

        // 文字平滑浮現
        if (progress > 0.3) {
            locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
        } else {
            locationHint.style.opacity = 0;
        }
        bgPhoto.style.opacity = 1;
    } 
    // 🍏 第二幕：100vh ➔ 200vh（純相片與文字 100% 定格留白，極致大氣）
    else if (progress > 1 && progress <= 2) {
        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;
        
        // 死死凍結在 100% 顯色狀態，不管怎麼滾都不會移位或變淡
        locationHint.style.opacity = 1;
        bgPhoto.style.opacity = 1;
    } 
    // 🍏 第三幕 ➔ 第四幕：200vh ➔ 300vh++（照片與字體慢速溶接淡出，將地圖推向前台）
    else if (progress > 2) {
        const stage3Progress = progress - 2; // 轉化為 0 到 1 的區間

        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;

        // 相片與小字同步優雅慢溶接淡出，讓第四幕的地圖安穩現身
        locationHint.style.opacity = 1 - stage3Progress;
        bgPhoto.style.opacity = 1 - stage3Progress;
    }
});