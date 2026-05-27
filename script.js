window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 🍏 將總滾動進度上限擴充改為 0 到 4 之間 (代表 500vh 的總長度)
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitle = document.getElementById('main-title');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');

    // 🍏 第一幕：0vh ➔ 100vh（首頁文字與黑霧自然淡出）
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
    // 🍏 第二幕 & 第三幕：100vh ➔ 300vh（擴展核心！在此整整兩個螢幕高的高度內，照片完全定格留白）
    else if (progress > 1 && progress <= 3) {
        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;
        
        // 長久的自駕公路凝視，享受絲滑安穩的極簡視覺
        locationHint.style.opacity = 1;
        bgPhoto.style.opacity = 1;
    } 
    // 🍏 第四幕：300vh ➔ 400vh++（照片與字體順應滾輪，進行自然絲滑的 1 到 0 全線性慢溶接）
    else if (progress > 3) {
        const stage4Progress = progress - 3; // 區間精準對應 0 到 1

        mainTitle.style.opacity = 0;
        darkOverlay.style.opacity = 0;

        // 自然、大氣地漸隱淡出，優雅交棒給地圖幕
        locationHint.style.opacity = 1 - stage4Progress;
        bgPhoto.style.opacity = 1 - stage4Progress;
    }
});