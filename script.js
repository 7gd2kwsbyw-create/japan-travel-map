// ==========================================
// 1. 多相簿全動態資料庫
// ==========================================
const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        prefId: "pref-aichi", // 對應 HTML 的群組 ID
        photos: [
            "images/korankei/maple_light_road_2.JPG", 
            "images/korankei/cross_line.JPG",
            "images/korankei/maple_bridge.JPG",
            "images/korankei/maple_bridge2.JPG",
            "images/korankei/maple_lake.JPG",
            "images/korankei/maple_lake2.JPG",
            "images/korankei/maple_light_road.JPG",
            "images/korankei/obajyan.JPG",
            "images/korankei/tomoegawa.JPG"
        ]
    },
    {
        title: "寂靜美保關，漫步青石疊通", 
        location: "📍 島根縣 ． 美保神社",
        prefId: "pref-shimane", // 對應 HTML 的群組 ID
        photos: [
            "images/mihonoseki/jinjyadoa.JPG", 
            "images/mihonoseki/basketball_bet.JPG",
            "images/mihonoseki/flag.JPG",
            "images/mihonoseki/jinjya_house.JPG",
            "images/mihonoseki/jinjya_stair.JPG",
            "images/mihonoseki/jinjya2.JPG",
            "images/mihonoseki/jinjyatorii.JPG",
            "images/mihonoseki/jyoyalight.JPG",
            "images/mihonoseki/osake_no_mise.JPG",
            "images/mihonoseki/semai_michi.JPG",
            "images/mihonoseki/semai_michi2.JPG",
            "images/mihonoseki/umi_no_keisiki.JPG"
        ]
    }
];

let currentAlbumIndex = 0; 
let currentPhotoIndex = 0; 
let isGalleryMode = false;  
let isThrottled = false;   
let isMapZoomed = false; // 地圖是否處於 Zoom-in 狀態
let pinsDropped = false; // 大頭針動畫是否已執行過

// ==========================================
// 2. 第一幕：首頁封面與大標題同步切換核心
// ==========================================
function updateAlbumCover() {
    const bgPhotoEl = document.getElementById('bg-photo');
    const titleEl = document.getElementById('main-title');
    const album = albums[currentAlbumIndex];
    
    if (bgPhotoEl && !isGalleryMode) {
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            bgPhotoEl.style.backgroundImage = `url('${album.photos[0]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (titleEl && !isGalleryMode) {
        titleEl.textContent = album.title;
    }
    
    currentPhotoIndex = 0; 
}

// ==========================================
// 3. 第三幕：藝廊模式內單張相片切換
// ==========================================
function updateGalleryPhoto(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    const album = albums[currentAlbumIndex];
    
    if (bgPhotoEl) {
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            bgPhotoEl.style.backgroundImage = `url('${album.photos[index]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (locationHintEl) {
        locationHintEl.innerHTML = `P. ${String(index + 1).padStart(2, '0')}`;
    }
    
    if (counterEl) {
        counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;
    }
}

// ==========================================
// 4. 網格暗房索引生成
// ==========================================
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = ''; 
    const album = albums[currentAlbumIndex];
    let gridHtml = '';
    
    album.photos.forEach((url, i) => {
        gridHtml += `
            <div class="grid-box">
                <img src="${url}" class="grid-item" data-index="${i}" alt="GR Photo">
            </div>`;
    });
    gridContainer.innerHTML = gridHtml;
    
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            currentPhotoIndex = targetIndex;
            updateGalleryPhoto(currentPhotoIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

// ==========================================
// 5. 左右控制箭頭控制核心
// ==========================================
const btnPrev = document.getElementById('prev-btn') || document.querySelector('.left-zone');
const btnNext = document.getElementById('next-btn') || document.querySelector('.right-zone');

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover();
        } else {
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
            updateAlbumCover();
        } else {
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

// ==========================================
// 6. 藝廊模式開關艙狀態控制
// ==========================================
function openGalleryDirectly(albumIndex) {
    currentAlbumIndex = albumIndex;
    isGalleryMode = true;
    document.getElementById('bg-photo').classList.add('gallery-layout');
    document.getElementById('main-title-container').style.opacity = 0;
    document.getElementById('main-title-container').style.pointerEvents = 'none';
    document.getElementById('dark-overlay').style.opacity = 0;
    document.getElementById('gallery-counter').style.opacity = 1;
    document.getElementById('open-index-btn').style.opacity = 1;
    
    const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
    if (closeGalleryBtn) {
        closeGalleryBtn.style.opacity = 1;
        closeGalleryBtn.style.pointerEvents = 'auto';
    }
    document.body.style.overflowY = 'hidden'; 
    updateGalleryPhoto(0); 
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) {
    mainTitleEl.addEventListener('click', () => {
        openGalleryDirectly(currentAlbumIndex);
    });
}

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;
        document.getElementById('bg-photo').classList.remove('gallery-layout');
        document.getElementById('main-title-container').style.opacity = 1;
        document.getElementById('main-title-container').style.pointerEvents = 'auto';
        document.getElementById('dark-overlay').style.opacity = 0.4;
        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        
        closeGalleryBtnEl.style.opacity = 0;
        closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll'; 
        updateAlbumCover();
        
        // 離開藝廊時還原地圖提示
        if(window.scrollY > window.innerHeight * 2) {
            document.getElementById('location-hint').innerHTML = "📍 點擊行政區探索日本散策";
        }
    });
}

if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', () => {
        buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

if (document.getElementById('close-index-btn')) {
    document.getElementById('close-index-btn').addEventListener('click', () => {
        document.getElementById('gallery-index-panel').classList.remove('open');
    });
}

// ==========================================
// 7. 藝廊模式內滑鼠滾輪動態翻頁
// ==========================================
window.addEventListener('wheel', (e) => {
    if (!isGalleryMode || document.getElementById('gallery-index-panel').classList.contains('open')) return;
    if (isThrottled) return; 
    
    const album = albums[currentAlbumIndex];
    if (e.deltaY > 20) {
        currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
        updateGalleryPhoto(currentPhotoIndex);
        throttleScroll();
    } else if (e.deltaY < -20) {
        currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
        updateGalleryPhoto(currentPhotoIndex);
        throttleScroll();
    }
});

function throttleScroll() {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 600); 
}

// ==========================================
// 8. 全域 500vh 時差滾動監聽
// ==========================================
window.addEventListener('scroll', () => {
    if (isGalleryMode) return; 

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    const currentAlbum = albums[currentAlbumIndex];

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location; 
            locationHint.style.opacity = Math.min(progress * 1.5, 1);
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } 
    else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location; 
            locationHint.style.opacity = 1;
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    }
    else if (progress > 2) {
        // 第三幕：進入地圖舞台
        const stage3Progress = (progress - 2) / 2; 
        const easedProgress = Math.pow(stage3Progress, 2); 
        
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        
        if (bgPhoto) bgPhoto.style.opacity = Math.max(0, 1 - easedProgress * 2); 
        
        if (mapContainer) {
            mapContainer.style.opacity = Math.min(easedProgress * 2, 1);
            if (easedProgress > 0.1) { 
                mapContainer.style.pointerEvents = 'auto'; 
                // 當滑到第三幕且未釘下大頭針時，觸發動畫
                if(!pinsDropped) triggerPinsDropping();
                if(!isMapZoomed && locationHint) {
                    locationHint.innerHTML = "📍 點擊行政區探索日本散策";
                    locationHint.style.opacity = 1;
                }
            } else { 
                mapContainer.style.pointerEvents = 'none'; 
            }
        }
    }
});

// ==========================================
// 9. 日本地圖核心交互控制 (Geolonia SVG 專用高精準坐標計算版)
// ==========================================

// 透過相簿設定，將 class 名稱對應到相簿
const mapConfig = [
    { selector: '.aichi', name: "愛知縣", spotId: "spot-korankei", albumIdx: 0 },
    { selector: '.shimane', name: "島根縣", spotId: "spot-miho", albumIdx: 1 }
];

// 計算並建立大頭針位置
function initPinPositions() {
    const pinsLayer = document.getElementById('dynamic-pref-pins-layer');
    if (!pinsLayer) return;
    pinsLayer.innerHTML = ''; // 清空防重複執行

    mapConfig.forEach(config => {
        const targetGroup = document.querySelector(`.prefectures ${config.selector}`);
        if (!targetGroup) return;

        // 🍏 核心算法：這張 SVG 有自帶 transform translate，必須擷取並加上內部 path 的 BBox
        let baseX = 0, baseY = 0;
        const transformAttr = targetGroup.getAttribute('transform');
        if (transformAttr) {
            const matches = transformAttr.match(/translate\(([^,]+)px?,\s*([^)]+)px?\)/) || transformAttr.match(/translate\(([^,\s]+)[\s,]+([^)]+)\)/);
            if (matches) {
                baseX = parseFloat(matches[1]);
                baseY = parseFloat(matches[2]);
            }
        }

        // 計算該縣市所有 path/polygon 結合後的幾何邊界
        const paths = targetGroup.querySelectorAll('path, polygon');
        if (paths.length === 0) return;
        
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        paths.forEach(p => {
            const box = p.getBBox();
            if(box.width === 0 || box.height === 0) return;
            if (box.x < minX) minX = box.x;
            if (box.y < minY) minY = box.y;
            if (box.x + box.width > maxX) maxX = box.x + box.width;
            if (box.y + box.height > maxY) maxY = box.y + box.height;
        });

        // 算出絕對幾何中心
        const centerX = baseX + (minX + maxX) / 2;
        const centerY = baseY + (minY + maxY) / 2;

        // 綁定資料供 Zoom 縮放使用
        targetGroup.setAttribute('data-center-x', centerX);
        targetGroup.setAttribute('data-center-y', centerY);
        targetGroup.style.cursor = 'pointer';

        // 動態生成紅色行政區大頭針
        const pinG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pinG.setAttribute('class', 'map-pin pref-pin');
        pinG.setAttribute('data-target-selector', config.selector);
        pinG.innerHTML = `
            <path class="pin-shape" d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" fill="#ff4757"/>
            <circle cx="12" cy="11" r="4" fill="#fff"/>
        `;
        pinG.style.transform = `translate(${centerX}px, ${centerY}px)`;
        pinsLayer.appendChild(pinG);

        // 同步定位第二層的景點細部綠針
        const spotPin = document.getElementById(config.spotId);
        if (spotPin) {
            // 讓綠針微幅偏移中心點，營造散策精緻感
            const offsetX = config.albumIdx === 0 ? 15 : -20;
            const offsetY = config.albumIdx === 0 ? -10 : 15;
            spotPin.style.transform = `translate(${centerX + offsetX}px, ${centerY + offsetY}px)`;
        }
    });

    // 點擊事件監聽連結
    document.querySelectorAll('.prefecture').forEach(prefPath => {
        prefPath.addEventListener('click', (e) => {
            const parentG = prefPath.parentElement;
            if (parentG && parentG.classList.contains('prefecture')) {
                triggerZoomIn(parentG);
            }
        });
    });
}

// 釘上大頭針落下動畫
function triggerPinsDropping() {
    pinsDropped = true;
    document.querySelectorAll('.pref-pin').forEach((pin, index) => {
        const transformStr = pin.style.transform;
        if (!transformStr) return;
        const matches = transformStr.match(/translate\(([^,]+)px?,\s*([^)]+)px?\)/);
        if (!matches) return;

        const targetX = parseFloat(matches[1]);
        const targetY = parseFloat(matches[2]);

        pin.style.transition = 'none';
        pin.style.transform = `translate(${targetX}px, ${targetY - 120}px)`;
        pin.style.opacity = 0;

        setTimeout(() => {
            pin.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
            pin.style.transform = `translate(${targetX}px, ${targetY}px)`;
            pin.style.opacity = 1;
        }, index * 180 + 100);
    });
}

// 點擊行政區 Zoom-in 放大舞台
function triggerZoomIn(groupElement) {
    if (isMapZoomed) return;
    
    // 檢查該縣市是否有安排相簿，沒有則不給予 Zoom-in
    const hasAlbum = mapConfig.some(c => groupElement.classList.contains(c.selector.replace('.','')));
    if (!hasAlbum) return;

    const titleEl = groupElement.querySelector('title');
    const prefName = titleEl ? titleEl.textContent.split(' / ')[0] : "未知縣市";
    
    const targetX = groupElement.getAttribute('data-center-x');
    const targetY = groupElement.getAttribute('data-center-y');

    const zoomGroup = document.getElementById('map-zoom-group');
    zoomGroup.style.transformOrigin = `${targetX}px ${targetY}px`;
    zoomGroup.style.transform = `scale(4.5)`; // Geolonia 地圖較為精細，放大 4.5 倍效果最佳

    isMapZoomed = true;
    document.getElementById('japan-map').classList.add('zoomed');
    document.getElementById('back-to-map-btn').style.opacity = 1;
    document.getElementById('back-to-map-btn').style.pointerEvents = 'auto';

    document.getElementById('location-hint').innerHTML = `📍 ${prefName} ． 請點擊綠色大頭針探索遊記`;
}

// 點擊返回全圖
document.getElementById('back-to-map-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('map-zoom-group').style.transform = `scale(1)`;
    
    isMapZoomed = false;
    document.getElementById('japan-map').classList.remove('zoomed');
    document.getElementById('back-to-map-btn').style.opacity = 0;
    document.getElementById('back-to-map-btn').style.pointerEvents = 'none';
    document.getElementById('location-hint').innerHTML = "📍 點擊行政區探索日本散策";
    hidePreview();
});

// 綠針懸浮卡片與點擊開艙
document.querySelectorAll('.spot-pin').forEach(pin => {
    const albumIndex = parseInt(pin.getAttribute('data-album-index'));
    const album = albums[albumIndex];
    
    pin.addEventListener('mousemove', (e) => {
        if (!isMapZoomed) return;
        const previewCard = document.getElementById('map-preview-card');
        const previewImg = document.getElementById('map-preview-img');
        const previewTitle = document.getElementById('map-preview-title');
        
        previewImg.src = album.photos[0];
        previewTitle.textContent = album.title;
        
        previewCard.style.left = `${e.clientX + 20}px`;
        previewCard.style.top = `${e.clientY + 20}px`;
        previewCard.style.opacity = 1;
    });
    
    pin.addEventListener('mouseleave', () => { hidePreview(); });
    
    pin.addEventListener('click', (e) => {
        e.stopPropagation();
        hidePreview();
        openGalleryDirectly(albumIndex);
    });
});

function hidePreview() {
    document.getElementById('map-preview-card').style.opacity = 0;
}

// 確保地圖完全渲染後再初始化座標
window.addEventListener('load', () => {
    initPinPositions();
});