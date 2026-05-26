document.addEventListener('DOMContentLoaded', () => {
    // 綁定 DOM 元素
    const overlay = document.getElementById('dark-overlay');
    const title = document.getElementById('main-title');
    const bgPhoto = document.getElementById('bg-photo');
    const locationHint = document.getElementById('location-hint');
    const sideZones = document.querySelectorAll('.side-click-zone');
    
    const shimanePath = document.getElementById('shimane');
    const japanMap = document.getElementById('japan-map');
    const rightPanel = document.getElementById('right-panel');
    const dots = document.querySelectorAll('.spot-dot');
    const tooltip = document.getElementById('tooltip');

    // 監聽滾動事件，控制三幕轉換
    window.addEventListener('scroll', () => {
        // 計算目前的滾動進度 (0 到 1)
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = scrollY / maxScroll;

        // 【第一幕 -> 第二幕】(進度 0 ~ 0.33)
        // 遮色片淡出、文字往上滑走
        let overlayOpacity = 1 - (progress * 3);
        overlay.style.opacity = Math.max(0, overlayOpacity);
        
        let titleOffset = progress * 800; // 文字向上移動的像素
        let titleOpacity = 1 - (progress * 2.5);
        title.style.transform = `translate(-50%, calc(-50% - ${titleOffset}px))`;
        title.style.opacity = Math.max(0, titleOpacity);

        // 如果進入第二幕，把兩側點擊區隱藏避免誤觸
        if (progress > 0.1) {
            sideZones.forEach(zone => zone.style.pointerEvents = 'none');
        } else {
            sideZones.forEach(zone => zone.style.pointerEvents = 'auto');
        }

        // 【第二幕 -> 第三幕】(進度 0.5 ~ 1.0)
        // 照片平滑淡出，露出底下的全白地圖與字體變色
        if (progress > 0.5) {
            // 將 0.5~1.0 的進度映射為 0~1 的相片透明度衰減
            let photoOpacity = 1 - ((progress - 0.5) * 2);
            bgPhoto.style.opacity = Math.max(0, photoOpacity);
            
            // 下方文字為了在白底上看清楚，轉為深灰色
            locationHint.style.color = '#888';
        } else {
            bgPhoto.style.opacity = 1;
            locationHint.style.color = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // 【第四幕】點擊島根縣的地圖互動
    shimanePath.addEventListener('click', () => {
        // 1. 地圖放大
        japanMap.classList.add('zoomed-shimane');
        
        // 2. 顯示白色景點小圓點
        dots.forEach(dot => dot.classList.add('visible'));
        
        // 3. 滑出右側照片面板
        rightPanel.classList.add('active');
    });

    // 景點小圓點的 Tooltip 邏輯
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', (e) => {
            tooltip.textContent = e.target.getAttribute('data-name');
            tooltip.style.opacity = 1;
            // 讓標籤跟隨鼠標位置
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });
        
        dot.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        dot.addEventListener('mouseleave', () => {
            tooltip.style.opacity = 0;
        });
    });
});