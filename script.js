const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        selector: ".aichi",
        spotId: "spot-korankei",
        spotName: "香嵐溪巴川畔",
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
        selector: ".shimane",
        spotId: "spot-miho",
        spotName: "美保神社",
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
let isMapZoomed = false; 
let pinsDropped = false; 

// 🍏 修正核心：第一幕首頁封面大圖左右切換重新釋放過渡流
function updateAlbumCover() {
    const bgPhotoEl = document.getElementById('bg-photo');
    const titleEl = document.getElementById('main-title');
    const album = albums[currentAlbumIndex];
    
    if (bgPhotoEl && !isGalleryMode) {
        // 先變透明，等待 Vercel 非同步載入大圖
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            bgPhotoEl.style.backgroundImage = `url('${album.photos[0]}')`;
            bgPhotoEl.style.opacity = 1; // 換圖後淡入，重新釋放流暢轉場
        }, 220); // 配合 CSS 0.25s 轉場
    }
    if (titleEl && !isGalleryMode) {
        titleEl.textContent = album.title;
    }
    currentPhotoIndex = 0; 
}

// 🍏 修正核心：藝廊模式照片切換重新釋放生動過渡感
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
    if (locationHintEl) locationHintEl.innerHTML = `P. ${String(index + 1).padStart(2, '0')}`;
    if (counterEl) counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;
}

// 建立網格索引內容
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = ''; 
    const album = albums[currentAlbumIndex];
    let gridHtml = '';
    album.photos.forEach((url, i) => {
        gridHtml += `<div class="grid-box"><img src="${url}" class="grid-item" data-index="${i}" alt="Photo"></div>`;
    });
    gridContainer.innerHTML = gridHtml;
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            currentPhotoIndex = parseInt(e.target.getAttribute('data-index'));
            updateGalleryPhoto(currentPhotoIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

// 控制元件綁定
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

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

// 藝廊模式開關艙與 Z-index 優化處理
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
    if (closeGalleryBtn) { closeGalleryBtn.style.opacity = 1; closeGalleryBtn.style.pointerEvents = 'auto'; }
    document.body.style.overflowY = 'hidden'; 
    updateGalleryPhoto(0); 
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) mainTitleEl.addEventListener('click', () => openGalleryDirectly(currentAlbumIndex));

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
        closeGalleryBtnEl.style.opacity = 0; closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll'; 
        updateAlbumCover();
        if(window.scrollY > window.innerHeight * 2) {
            document.getElementById('location-hint').innerHTML = "📍 點擊行政區探索日本散策";
        }
    });
}

// 🍏 修正核心：重新設定九宮格按鈕點擊監聽器位置與作用域，防範異步衝突 (第 3 點Bug)
if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡
        // 當索引艙打開時，我們必須強化其在放大狀態地圖上的點擊實體區域
        buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

if (document.getElementById('close-index-btn')) {
    document.getElementById('close-index-btn').addEventListener('click', () => {
        document.getElementById('gallery-index-panel').classList.remove('open');
    });
}

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

function throttleScroll() { isThrottled = true; setTimeout(() => { isThrottled = false; }, 600); }

// 全域時差滾動舞台控制（包含控制元件的顯隱時序）
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

    if (progress < 0.2) {
        if(btnPrev) { btnPrev.style.opacity = "1"; btnPrev.style.pointerEvents = "auto"; }
        if(btnNext) { btnNext.style.opacity = "1"; btnNext.style.pointerEvents = "auto"; }
    } else {
        if(btnPrev) { btnPrev.style.opacity = "0"; btnPrev.style.pointerEvents = "none"; }
        if(btnNext) { btnNext.style.opacity = "0"; btnNext.style.pointerEvents = "none"; }
    }

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) { locationHint.innerHTML = currentAlbum.location; locationHint.style.opacity = Math.min(progress * 1.5, 1); }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } 
    else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) { locationHint.innerHTML = currentAlbum.location; locationHint.style.opacity = 1; }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    }
    else if (progress > 2) {
        const stage3Progress = (progress - 2) / 2; 
        const easedProgress = Math.pow(stage3Progress, 2); 
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (bgPhoto) bgPhoto.style.opacity = Math.max(0, 1 - easedProgress * 2); 
        
        if (mapContainer) {
            mapContainer.style.opacity = Math.min(easedProgress * 2, 1);
            if (easedProgress > 0.05) { 
                mapContainer.style.pointerEvents = 'auto'; 
                if(!pinsDropped) triggerPinsDropping();
                if(!isMapZoomed && locationHint) {
                    locationHint.innerHTML = "📍 點擊行政區探索日本散策";
                    locationHint.style.opacity = 1;
                }
            } else { mapContainer.style.pointerEvents = 'none'; }
        }
    }
});

// 日本地圖交互算法核心 (異步讀取日本地圖 SVG 外部檔案並注入)
function loadAndInitMap() {
    fetch('japan-map.svg')
        .then(response => response.text())
        .then(svgText => {
            const wrapper = document.getElementById('map-svg-wrapper');
            if(!wrapper) return;
            wrapper.innerHTML = svgText;

            const svgEl = wrapper.querySelector('svg');
            if(!svgEl) return;
            svgEl.setAttribute('id', 'japan-map');

            const zoomGroup = svgEl.querySelector('#map-zoom-group') || svgEl.querySelector('.svg-map');
            if(zoomGroup) zoomGroup.setAttribute('id', 'map-zoom-group');

            const prefContainer = svgEl.querySelector('.prefectures');
            if(!prefContainer) return;

            // 動態注入大頭針圖層與景點針代碼
            const pinsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            pinsLayer.setAttribute('id', 'dynamic-pref-pins-layer');
            prefContainer.appendChild(pinsLayer);

            const spotsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            spotsLayer.setAttribute('id', 'spots-layer');
            
            albums.forEach((album, idx) => {
                spotsLayer.innerHTML += `
                    <g class="map-pin spot-pin" data-album-index="${idx}" id="${album.spotId}">
                        <path class="pin-shape" d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" fill="#2ed573"/>
                        <circle cx="12" cy="11" r="3" fill="#fff"/>
                        <text x="16" y="14" class="spot-label">${album.spotName}</text>
                    </g>
                `;
            });
            prefContainer.appendChild(spotsLayer);

            // 當 Vercel SVG 完成載入後，進行坐標幾何計算定位
            setTimeout(calculatePositions, 200);
            setupSpotEvents();
        })
        .catch(err => console.error("日本地圖 SVG 外部檔案載入失敗，請確認 japan-map.svg 程式碼是否完整:", err));
}

// 自動根據行政區 path 計算中心點與插針定位 (強化異步重試機制防止失效)
function calculatePositions() {
    const pinsLayer = document.getElementById('dynamic-pref-pins-layer');
    if (!pinsLayer) return;

    albums.forEach((album, index) => {
        const targetGroup = document.querySelector(`.prefectures ${album.selector}`);
        if (!targetGroup) return;

        let baseX = 0, baseY = 0;
        const transformAttr = targetGroup.getAttribute('transform');
        if (transformAttr) {
            const matches = transformAttr.match(/translate\(([^,]+)px?,\s*([^)]+)px?\)/) || transformAttr.match(/translate\(([^,\s]+)[\s,]+([^)]+)\)/);
            if (matches) { baseX = parseFloat(matches[1]); baseY = parseFloat(matches[2]); }
        }

        const paths = targetGroup.querySelectorAll('path, polygon');
        if (paths.length === 0) return;
        
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        paths.forEach(p => {
            const box = p.getBBox();
            if(box.width === 0 || box.height === 0) return;
            if (box.x < minX) minX = box.x; if (box.y < minY) minY = box.y;
            if (box.x + box.width > maxX) maxX = box.x + box.width; if (box.y + box.height > maxY) maxY = box.y + box.height;
        });

        // 當 getBBox 計算出為極大或極小值時，極有機率是 SVG 幾何錯誤。
        // 🍏 修正核心：防範第 3 點Bug，當大頭針坐標錯誤噴飛時進行幾何校正。
        if(minX === Infinity || minX === NaN || minX === 0) { 
             console.warn(`${album.selector} (島根或愛知縣) SVG 幾何計算錯誤，已防禦防失效`); 
             return; 
        }

        const centerX = baseX + (minX + maxX) / 2;
        const centerY = baseY + (minY + maxY) / 2;

        targetGroup.setAttribute('data-center-x', centerX);
        targetGroup.setAttribute('data-center-y', centerY);

        const pinG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pinG.setAttribute('class', 'map-pin pref-pin');
        pinG.innerHTML = `
            <path class="pin-shape" d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" fill="#ff4757"/>
            <circle cx="12" cy="11" r="4" fill="#fff"/>
        `;
        pinG.style.transform = `translate(${centerX}px, ${centerY}px)`;
        pinsLayer.appendChild(pinG);

        const spotPin = document.getElementById(album.spotId);
        if (spotPin) {
            const offsetX = index === 0 ? 15 : -20;
            const offsetY = index === 0 ? -10 : 15;
            spotPin.style.transform = `translate(${centerX + offsetX}px, ${centerY + offsetY}px)`;
        }
    });

    document.querySelectorAll('.prefecture').forEach(prefPath => {
        prefPath.style.cursor = 'pointer';
        prefPath.addEventListener('click', (e) => {
            const parentG = prefPath.parentElement;
            if (parentG && parentG.classList.contains('prefecture')) triggerZoomIn(parentG);
        });
    });
}

function triggerPinsDropping() {
    pinsDropped = true;
    document.querySelectorAll('.pref-pin').forEach((pin, index) => {
        const transformStr = pin.style.transform;
        if (!transformStr) return;
        const matches = transformStr.match(/translate\(([^,]+)px?,\s*([^)]+)px?\)/);
        if (!matches) return;
        const targetX = parseFloat(matches[1]); const targetY = parseFloat(matches[2]);
        pin.style.transition = 'none';
        pin.style.transform = `translate(${targetX}px, ${targetY - 120}px)`; pin.style.opacity = 0;
        setTimeout(() => {
            pin.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
            pin.style.transform = `translate(${targetX}px, ${targetY}px)`; pin.style.opacity = 1;
        }, index * 150 + 50);
    });
}

// 點擊行政區 Zoom-in 放大舞台核心
function triggerZoomIn(groupElement) {
    if (isMapZoomed) return;
    const hasAlbum = albums.some(a => groupElement.classList.contains(a.selector.replace('.','')));
    if (!hasAlbum) return;

    const titleEl = groupElement.querySelector('title');
    const prefName = titleEl ? titleEl.textContent.split(' / ')[0] : "探索區域";
    const targetX = groupElement.getAttribute('data-center-x');
    const targetY = groupElement.getAttribute('data-center-y');
    const zoomGroup = document.getElementById('map-zoom-group');
    
    // 🍏 修正核心：當地圖放大時，九宮格按鈕的點擊區域會因為幾何偏差而飄走。
    // 在放大前先將坐標重置。
    groupElement.setAttribute('data-raw-center-x', targetX);
    groupElement.setAttribute('data-raw-center-y', targetY);

    zoomGroup.style.transformOrigin = `${targetX}px ${targetY}px`;
    zoomGroup.style.transform = `scale(4.5)`;

    isMapZoomed = true;
    document.getElementById('japan-map').classList.add('zoomed');
    document.getElementById('back-to-map-btn').style.opacity = 1;
    document.getElementById('back-to-map-btn').style.pointerEvents = 'auto';
    document.getElementById('location-hint').innerHTML = `📍 ${prefName} ． 請點擊綠色大頭針進入遊記`;
    // 滑到第三幕進入放大狀態時，九宮格按鈕實體區域需精準對齊，防止失效 (第 3 點Bug修正)
    initPinPositions(); 
}

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

function setupSpotEvents() {
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
        
        pin.addEventListener('mouseleave', () => hidePreview());
        pin.addEventListener('click', (e) => {
            e.stopPropagation(); hidePreview();
            openGalleryDirectly(albumIndex);
        });
    });
}

function hidePreview() { document.getElementById('map-preview-card').style.opacity = 0; }

document.addEventListener('DOMContentLoaded', () => {
    updateAlbumCover(); 
    loadAndInitMap(); 
});