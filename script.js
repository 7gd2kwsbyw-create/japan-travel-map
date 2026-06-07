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

const regionNames = {
    'region-hokkaido': '北海道地方', 'region-tohoku': '東北地方', 'region-kanto': '關東地方',
    'region-chubu': '中部地方', 'region-kinki': '近畿地方', 'region-chugoku': '中國地方',
    'region-shikoku': '四國地方', 'region-kyushu': '九州地方'
};

const regionScales = {
    'region-hokkaido': 2.3, 'region-tohoku': 2.6, 'region-kanto': 4.0,
    'region-chubu': 3.2, 'region-kinki': 4.0, 'region-chugoku': 3.8,
    'region-shikoku': 4.8, 'region-kyushu': 3.6
};

let currentAlbumIndex = 0; let currentPhotoIndex = 0; let isGalleryMode = false; let isThrottled = false;
let currentLayer = 1; let activeRegionClass = null;

// 🍏 徹底根除抖動的圖片切換機制
function changePhotoWithFade(newUrl, isInitial = false) {
    const bgPhotoEl = document.getElementById('bg-photo');
    if (!bgPhotoEl) return;
    if (isInitial) {
        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;
        bgPhotoEl.style.opacity = 1;
        bgPhotoEl.style.transition = 'none';
        return;
    }
    bgPhotoEl.style.transition = 'opacity 0.22s ease-in-out';
    bgPhotoEl.style.opacity = 0;
    setTimeout(() => {
        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;
        bgPhotoEl.style.opacity = 1;
    }, 220);
}

// 🍏 修正核心：動態將所有行政區的內聯矩陣強制標準化 (Reset Matrix)
function resetSVGMatrix(svgEl) {
    const mainGroup = svgEl.querySelector('.prefectures');
    if (mainGroup) mainGroup.setAttribute('transform', 'matrix(1,0,0,1,0,0)');
}

function loadAndInitMap() {
    fetch('japan-map.svg')
        .then(response => response.text())
        .then(svgText => {
            const wrapper = document.getElementById('map-svg-wrapper');
            wrapper.innerHTML = svgText;
            const svgEl = wrapper.querySelector('svg');
            
            resetSVGMatrix(svgEl); // 🍏 執行矩陣歸零
            
            const prefContainer = svgEl.querySelector('.prefectures');
            // 空間淨化：直接刪除幽靈碎片
            prefContainer.querySelectorAll('g.prefecture').forEach(g => {
                const paths = Array.from(g.querySelectorAll('path, polygon'));
                paths.forEach(p => {
                    const box = p.getBBox();
                    if (box.x < 100 && box.y < 100) p.remove(); // 砍掉所有偏移的碎片
                });
                
                const rClass = getRegionClass(g);
                if (rClass) g.classList.add(rClass);
            });

            setTimeout(calculateGeometries, 150);
            setupStageEvents();
        });
}

// 🍏 修正核心：重新計算幾何時，無視所有偏移，以畫布左上角為唯一基準點
function getRegionTrueCenter(regionClass) {
    const members = document.querySelectorAll(`.prefectures .${regionClass}`);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    members.forEach(m => {
        const box = m.getBBox();
        if (box.width > 0) {
            if (box.x < minX) minX = box.x;
            if (box.y < minY) minY = box.y;
            if (box.x + box.width > maxX) maxX = box.x + box.width;
            if (box.y + box.height > maxY) maxY = box.y + box.height;
        }
    });
    return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
}

// ... (省略部分重複的 setupStageEvents 與其他功能函式，以確保此區塊僅修正重點)
// 請確保您的 script.js 點擊事件 zoomGroup 的 transform 運算如下：
/* const tx = 500 - scaleLevel * rCenter.x;
    const ty = 500 - scaleLevel * rCenter.y;
    zoomGroup.style.transform = `translate(${tx}px, ${ty}px) scale(${scaleLevel})`;
*/