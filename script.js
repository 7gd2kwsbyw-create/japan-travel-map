// 🍏 徹底修復：修正後的 500vh 五幕滾動時差與背景嚴格切換邏輯
window.addEventListener('scroll', () => {
    // 如果全螢幕相簿艙是打開的，直接鎖定不執行滾動計算
    if (document.getElementById('article-reader-panel').classList.contains('open')) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    // 🍏 狀態 A：第一幕 (滾動進度 0 ~ 1) ➔ 專注在第一張照片，嚴格禁止第二張圖滲漏
    if (progress <= 1) {
        if (mapContainer) {
            mapContainer.style.opacity = 0;
            mapContainer.style.pointerEvents = 'none';
        }
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) {
            darkOverlay.style.opacity = 0.6 * (1 - progress);
        }
        if (locationHint) {
            if (progress > 0.3) {
                locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
            } else {
                locationHint.style.opacity = 0;
            }
        }
        
        // 🍏 核心修正：強制第一幕只顯示當前 index 的背景，不透明度固定為 1，絕不允許其他圖疊加
        if (bgPhoto) {
            bgPhoto.style.opacity = 1;
        }
    } 
    // 🍏 狀態 B：第二、三幕 (滾動進度 1 ~ 3) ➔ 保持落款與背景純淨展示
    else if (progress > 1 && progress <= 3) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 0;
            mainTitleContainer.style.pointerEvents = 'none';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1;
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) {
            mapContainer.style.opacity = 0;
            mapContainer.style.pointerEvents = 'none';
        }
    } 
    // 🍏 狀態 C：第四幕轉第五幕 (滾動進度 3 ~ 4) ➔ 背景與落款淡出，日本地圖平滑淡入
    else if (progress > 3) {
        const stage4Progress = progress - 3; // 計算 0 ~ 1 的淡出比例
        
        if (locationHint) locationHint.style.opacity = 1 - stage4Progress;
        
        // 🍏 核心修正：隨著向下滑動，第一、二、三幕的背景照片必須跟著 progress 徹底淡出至 0
        if (bgPhoto) {
            bgPhoto.style.opacity = 1 - stage4Progress;
        }
        
        if (mapContainer) {
            mapContainer.style.opacity = stage4Progress;
            if (stage4Progress > 0.9) {
                mapContainer.style.pointerEvents = 'auto';
            } else {
                mapContainer.style.pointerEvents = 'none';
            }
        }
    }
});