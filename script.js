const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        selector: ".aichi",
        spotId: "spot-korankei",
        spotName: "香嵐溪巴川畔",
        lat: 35.1304462,
        lng: 137.3160731,
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
        title: "犬山城上望木曾川，午後光影裡的天守",
        location: "📍 愛知縣 ． 犬山城",
        selector: ".aichi",
        spotId: "spot-inuyama-castle",
        spotName: "犬山城",
        lat: 35.3883304,
        lng: 136.9392776,
        photos: [
            "images/inuyama-castle/01_inuyama_castle_keep.jpg",
            "images/inuyama-castle/02_inuyama_castle_window_kiso_river.jpg",
            "images/inuyama-castle/03_kiso_river_evening_bridge.jpg",
            "images/inuyama-castle/04_inuyama_castle_town_riverside.jpg",
            "images/inuyama-castle/05_kiso_river_city_panorama.jpg"
        ]
    },
    {
        title: "深秋楓紅的下呂街道，在加恵瑠神社祈求無事帰る",
        location: "📍 岐阜縣 ． 加恵瑠神社",
        selector: ".gifu",
        spotId: "spot-gero-kaeru-shrine",
        spotName: "下呂溫泉與加恵瑠神社",
        lat: 35.810295,
        lng: 137.241013,
        photos: [
            "images/gero-kaeru-shrine/01_kaeru_shrine_frog_ema.jpg",
            "images/gero-kaeru-shrine/05_frog_chozu_water_basin.jpg",
            "images/gero-kaeru-shrine/06_kaeru_shrine_ema_rack.jpg",
            "images/gero-kaeru-shrine/07_frog_statue_under_tree.jpg",
            "images/gero-kaeru-shrine/09_frog_fire_hydrant_cover.jpg",
            "images/gero-kaeru-shrine/02_gero_onsen_street_shop.jpg",
            "images/gero-kaeru-shrine/08_gero_pudding_shop.jpg",
            "images/gero-kaeru-shrine/03_autumn_maple_lane.jpg",
            "images/gero-kaeru-shrine/04_red_maple_closeup.jpg",
            "images/gero-kaeru-shrine/10_autumn_river_maples.jpg"
        ]
    },
    {
        title: "寂靜美保關，漫步青石疊通", 
        location: "📍 島根縣 ． 美保神社",
        selector: ".shimane",
        spotId: "spot-miho",
        spotName: "美保神社",
        lat: 35.5622413,
        lng: 133.3067215,
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
    },
    {
        title: "境港單車追日落，水木茂之道的日與夜",
        location: "📍 鳥取縣 ． 境港",
        selector: ".tottori",
        spotId: "spot-sakaiminato-mizuki",
        spotName: "境港與水木茂之道",
        lat: 35.5457208,
        lng: 133.2258081,
        photos: [
            "images/sakaiminato-mizuki/03_bicycles_by_harbor_sunset.jpg",
            "images/sakaiminato-mizuki/01_sakai_harbor_mountains_evening.jpg",
            "images/sakaiminato-mizuki/02_fishing_boat_sunflare.jpg",
            "images/sakaiminato-mizuki/04_stingray_under_harbor_water.jpg",
            "images/sakaiminato-mizuki/05_vertical_sea_sunset_reflection.jpg",
            "images/sakaiminato-mizuki/06_yokai_manju_night_street.jpg",
            "images/sakaiminato-mizuki/07_night_vending_machine_and_dogs.jpg",
            "images/sakaiminato-mizuki/08_red_signal_tatsumiya_shop.jpg",
            "images/sakaiminato-mizuki/09_blue_signal_tatsumiya_shop.jpg",
            "images/sakaiminato-mizuki/10_medama_oyaji_lantern.jpg",
            "images/sakaiminato-mizuki/11_mizuki_shrine_entrance.jpg",
            "images/sakaiminato-mizuki/12_market_delivery_van.jpg",
            "images/sakaiminato-mizuki/13_mitsubishi_battery_vending.jpg",
            "images/sakaiminato-mizuki/14_sakaiminato_street_cat.jpg"
        ]
    },
    {
        title: "倉敷美觀地區，漫步在老街的悠閒",
        location: "📍 岡山縣 ． 倉敷美觀地區",
        selector: ".okayama",
        spotId: "spot-kurashiki-bikan",
        spotName: "倉敷美觀地區",
        lat: 34.596525,
        lng: 133.7725863,
        photos: [
            "images/kurashiki-bikan/01_kurashiki_bikan_canal_twilight.jpg",
            "images/kurashiki-bikan/02_kurashiki_station_sign_blue_sky.jpg",
            "images/kurashiki-bikan/03_kurashiki_evening_street_sunlight.jpg",
            "images/kurashiki-bikan/04_misty_bikan_canal_walk.jpg",
            "images/kurashiki-bikan/05_canal_reflection_white_storehouses.jpg",
            "images/kurashiki-bikan/06_white_wall_warehouse_detail.jpg",
            "images/kurashiki-bikan/07_kurashiki_river_boat_under_branches.jpg",
            "images/kurashiki-bikan/08_aibi_jizo_spring_blossoms.jpg",
            "images/kurashiki-bikan/09_cafe_el_greco_ivy_facade.jpg",
            "images/kurashiki-bikan/10_bicycle_and_woven_lamp_detail.jpg",
            "images/kurashiki-bikan/11_bikan_night_street_bicycle_lamp.jpg"
        ]
    },
    {
        title: "大久野島，海風裡的兔影與廢墟",
        location: "📍 廣島縣 ． 大久野島",
        selector: ".hiroshima",
        spotId: "spot-okunoshima",
        spotName: "大久野島",
        lat: 34.3091206,
        lng: 132.9937586,
        photos: [
            "images/okunoshima/01_rabbit_gathering_feeding_time.jpg",
            "images/okunoshima/02_ferry_arrival_rainy_pier.jpg",
            "images/okunoshima/03_rabbit_shuttle_bus_by_sea.jpg",
            "images/okunoshima/04_power_tower_hillside.jpg",
            "images/okunoshima/05_roadside_rabbit_on_moss.jpg",
            "images/okunoshima/06_beachside_rabbit_closeup.jpg",
            "images/okunoshima/07_sleeping_rabbit_palm_leaves.jpg",
            "images/okunoshima/08_white_rabbit_portrait.jpg",
            "images/okunoshima/09_soft_focus_white_rabbit.jpg",
            "images/okunoshima/10_resting_rabbit_near_building.jpg",
            "images/okunoshima/11_abandoned_factory_wall.jpg",
            "images/okunoshima/12_factory_archway_ruins.jpg",
            "images/okunoshima/13_blue_seto_sea_horizon.jpg"
        ]
    }
];

const smallLights = [
    {
        title: "宍道湖的嫁島夕照",
        location: "📍 島根縣 ． 宍道湖嫁島",
        selector: ".shimane",
        spotId: "spot-shinji-yomegashima",
        spotName: "宍道湖嫁島夕照",
        lat: 35.4561667,
        lng: 133.0467126,
        photos: [
            "images/shinji-yomegashima/01_yomegashima_sunset_boat.jpg",
            "images/shinji-yomegashima/02_yomegashima_sunset_wide.jpg",
            "images/shinji-yomegashima/03_lake_shinji_sunset_reflection.jpg"
        ]
    }
];

const regionNames = {
    'region-hokkaido': '北海道地方',
    'region-tohoku': '東北地方',
    'region-kanto': '關東地方',
    'region-chubu': '中部地方',
    'region-kinki': '近畿地方',
    'region-chugoku': '中國地方',
    'region-shikoku': '四國地方',
    'region-kyushu': '九州地方'
};

const regionFitOptions = {
    'region-hokkaido': { padding: 1.35, minWidth: 360 },
    'region-tohoku': { padding: 1.45, minWidth: 270 },
    'region-kanto': { padding: 1.55, minWidth: 210 },
    'region-chubu': { padding: 1.55, minWidth: 260 },
    'region-kinki': { padding: 1.65, minWidth: 210 },
    'region-chugoku': { padding: 1.55, minWidth: 230 },
    'region-shikoku': { padding: 1.45, minWidth: 185 },
    'region-kyushu': { padding: 1.12, minWidth: 165 }
};

const MAP_ANIMATION_FAST = 520;
const MAP_REVEAL_START = 2.75;
const MAP_REVEAL_LENGTH = 1.25;
const REGION_CLASSES = Object.keys(regionNames);

const prefectureClassByCode = {
    1: 'hokkaido', 2: 'aomori', 3: 'iwate', 4: 'miyagi', 5: 'akita', 6: 'yamagata', 7: 'fukushima',
    8: 'ibaraki', 9: 'tochigi', 10: 'gunma', 11: 'saitama', 12: 'chiba', 13: 'tokyo', 14: 'kanagawa',
    15: 'niigata', 16: 'toyama', 17: 'ishikawa', 18: 'fukui', 19: 'yamanashi', 20: 'nagano',
    21: 'gifu', 22: 'shizuoka', 23: 'aichi', 24: 'mie',
    25: 'shiga', 26: 'kyoto', 27: 'osaka', 28: 'hyogo', 29: 'nara', 30: 'wakayama',
    31: 'tottori', 32: 'shimane', 33: 'okayama', 34: 'hiroshima', 35: 'yamaguchi',
    36: 'tokushima', 37: 'kagawa', 38: 'ehime', 39: 'kochi',
    40: 'fukuoka', 41: 'saga', 42: 'nagasaki', 43: 'kumamoto', 44: 'oita', 45: 'miyazaki', 46: 'kagoshima'
};

let mapProjection = null;

let homeAlbumIndex = 0;
let browsingAlbumIndex = 0;
let currentAlbumIndex = 0;
let currentPhotoIndex = 0;
let isGalleryMode = false;
let isThrottled = false;

let currentLayer = 1;
let activeRegionClass = null;
let activePrefectureGroup = null;
let currentViewBox = { x: 0, y: 0, width: 1000, height: 1000 };
let originalViewBox = { x: 0, y: 0, width: 1000, height: 1000 };
let viewBoxAnimationId = null;
let previewHideTimer = null;
let previewContentKey = '';
let previewAnchorElement = null;
let previewInteractionLocked = false;
let expandedSmallLightIndex = null;
let galleryReturnContext = 'home';
let photoTransitionId = 0;
let albumPreloadRunId = 0;

const imagePreloadCache = new Map();

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function setMainTitle(title) {
    const titleEl = document.getElementById('main-title');
    if (!titleEl) return;

    const lines = String(title)
        .split('，')
        .map(line => line.trim())
        .filter(Boolean);

    titleEl.innerHTML = lines.length > 1
        ? lines.map(line => `<span class="title-line">${escapeHtml(line)}</span>`).join('')
        : escapeHtml(title);
}

function getPrefClassFromSelector(selector) {
    return selector ? selector.replace('.', '') : '';
}

function getAlbumsForPrefecture(prefectureGroup) {
    if (!prefectureGroup) return [];

    return albums
        .map((album, index) => ({ ...album, albumIndex: index }))
        .filter(album => prefectureGroup.classList.contains(getPrefClassFromSelector(album.selector)));
}

function getAlbumsForRegion(regionClass) {
    return albums
        .map((album, index) => ({ ...album, albumIndex: index }))
        .filter(album => {
            const pref = document.querySelector(`.prefectures g.prefecture${album.selector}`);
            return pref && pref.classList.contains(regionClass);
        });
}

function getAlbumsByPrefecture() {
    return albums.reduce((groups, album, index) => {
        const prefClass = getPrefClassFromSelector(album.selector);
        if (!groups[prefClass]) groups[prefClass] = [];
        groups[prefClass].push({ ...album, albumIndex: index });
        return groups;
    }, {});
}

function getSmallLightsForPrefecture(prefectureGroup) {
    if (!prefectureGroup) return [];

    return smallLights
        .map((light, index) => ({ ...light, smallLightIndex: index }))
        .filter(light => prefectureGroup.classList.contains(getPrefClassFromSelector(light.selector)));
}

function getSmallLightsForRegion(regionClass) {
    return smallLights
        .map((light, index) => ({ ...light, smallLightIndex: index }))
        .filter(light => {
            const pref = document.querySelector(`.prefectures g.prefecture${light.selector}`);
            return pref && pref.classList.contains(regionClass);
        });
}

function getSmallLightsByPrefecture() {
    return smallLights.reduce((groups, light, index) => {
        const prefClass = getPrefClassFromSelector(light.selector);
        if (!groups[prefClass]) groups[prefClass] = [];
        groups[prefClass].push({ ...light, smallLightIndex: index });
        return groups;
    }, {});
}

function getContentForPrefecture(prefectureGroup) {
    return {
        albums: getAlbumsForPrefecture(prefectureGroup),
        smallLights: getSmallLightsForPrefecture(prefectureGroup)
    };
}

function getContentForRegion(regionClass) {
    const regionAlbums = getAlbumsForRegion(regionClass);
    const regionSmallLights = getSmallLightsForRegion(regionClass);
    return {
        albums: regionAlbums,
        smallLights: regionSmallLights,
        count: regionAlbums.length + regionSmallLights.length
    };
}

function getContentByPrefecture() {
    const byPref = {};

    Object.entries(getAlbumsByPrefecture()).forEach(([prefClass, prefAlbums]) => {
        if (!byPref[prefClass]) byPref[prefClass] = { albums: [], smallLights: [] };
        byPref[prefClass].albums = prefAlbums;
    });

    Object.entries(getSmallLightsByPrefecture()).forEach(([prefClass, prefSmallLights]) => {
        if (!byPref[prefClass]) byPref[prefClass] = { albums: [], smallLights: [] };
        byPref[prefClass].smallLights = prefSmallLights;
    });

    return byPref;
}

function preloadImage(url) {
    if (!url) return Promise.resolve(null);

    const cached = imagePreloadCache.get(url);
    if (cached) return cached.promise;

    const img = new Image();
    img.decoding = 'async';
    const entry = { img, promise: null, loaded: false };

    const promise = new Promise(resolve => {
        img.onload = () => {
            entry.loaded = true;
            resolve(img);
        };
        img.onerror = () => {
            entry.loaded = true;
            resolve(img);
        };
    });

    entry.promise = promise;
    imagePreloadCache.set(url, entry);
    img.src = url;
    return promise;
}

function isImageReady(url) {
    const cached = imagePreloadCache.get(url);
    return Boolean(cached && cached.loaded);
}

function preloadPhotos(urls) {
    urls.forEach(url => preloadImage(url));
}

function preloadAlbumPhotos(albumIndex, startIndex = 0) {
    const album = albums[albumIndex];
    if (!album) return;

    const runId = ++albumPreloadRunId;
    const total = album.photos.length;
    const preferred = [
        startIndex,
        (startIndex + 1) % total,
        (startIndex - 1 + total) % total
    ];
    const rest = album.photos
        .map((_, index) => index)
        .filter(index => !preferred.includes(index));
    const ordered = [...preferred, ...rest]
        .filter((index, position, indexes) => indexes.indexOf(index) === position)
        .map(index => album.photos[index]);

    preloadPhotos(ordered.slice(0, 3));

    let index = 3;
    const loadNext = () => {
        if (runId !== albumPreloadRunId || index >= ordered.length) return;
        preloadImage(ordered[index]).then(() => {
            index += 1;
            setTimeout(loadNext, 90);
        });
    };

    setTimeout(loadNext, 180);
}

function preloadAlbumCovers() {
    preloadPhotos(albums.map(album => album.photos[0]));
}

function preloadSmallLightCovers() {
    preloadPhotos(smallLights.map(light => light.photos[0]));
}

function preloadSmallLightPhotos(smallLightIndex) {
    const light = smallLights[smallLightIndex];
    if (!light) return;
    preloadPhotos(light.photos);
}

function preloadSmallLights(lightList = []) {
    lightList.forEach(light => preloadSmallLightPhotos(light.smallLightIndex));
}

function warmSmallLightPhotos() {
    const warm = () => smallLights.forEach((_, index) => preloadSmallLightPhotos(index));
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(warm, { timeout: 1600 });
    } else {
        setTimeout(warm, 900);
    }
}

function preloadGalleryNeighbors(album, index) {
    if (!album || !album.photos.length) return;

    const previousIndex = (index - 1 + album.photos.length) % album.photos.length;
    const nextIndex = (index + 1) % album.photos.length;
    preloadPhotos([
        album.photos[previousIndex],
        album.photos[index],
        album.photos[nextIndex]
    ]);
}

function changePhotoWithFade(newUrl, isInitial = false) {
    const bgPhotoEl = document.getElementById('bg-photo');
    if (!bgPhotoEl) return;
    const requestId = ++photoTransitionId;

    const applyPhoto = (img = null) => {
        if (requestId !== photoTransitionId) return;

        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;

        if (bgPhotoEl.classList.contains('gallery-layout')) {
            if (img && img.naturalWidth && img.naturalHeight) {
                bgPhotoEl.classList.toggle('portrait-layout', img.naturalHeight > img.naturalWidth);
            }
        } else {
            bgPhotoEl.classList.remove('portrait-layout');
        }
    };

    if (isInitial) {
        preloadImage(newUrl).then(applyPhoto);
        bgPhotoEl.style.opacity = 1;
        bgPhotoEl.style.transition = 'none';
        return;
    }

    const waitForImage = !isImageReady(newUrl);
    if (waitForImage && isGalleryMode) {
        bgPhotoEl.classList.add('photo-loading');
        bgPhotoEl.style.transition = 'opacity 0.16s ease';
        bgPhotoEl.style.opacity = 0.82;
    }

    preloadImage(newUrl).then(img => {
        if (requestId !== photoTransitionId) return;

        bgPhotoEl.classList.remove('photo-loading');
        bgPhotoEl.style.transition = 'opacity 0.22s ease-in-out';
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            applyPhoto(img);
            bgPhotoEl.style.opacity = 1;
            setTimeout(() => {
                if (!isGalleryMode) bgPhotoEl.style.transition = 'none';
            }, 230);
        }, 220);
    });
}

function updateAlbumCover(isInitial = false) {
    currentAlbumIndex = homeAlbumIndex;
    const album = albums[homeAlbumIndex];
    if (!isGalleryMode) setMainTitle(album.title);
    changePhotoWithFade(album.photos[0], isInitial);
    currentPhotoIndex = 0;
    if (!isGalleryMode) restoreHomeHint();
}

function restoreHomeHint() {
    const locationHintEl = document.getElementById('location-hint');
    if (!locationHintEl) return;

    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / window.innerHeight, 4);
    locationHintEl.classList.remove('light-mode');
    locationHintEl.innerHTML = albums[homeAlbumIndex].location;
    locationHintEl.style.opacity = progress <= 1 ? Math.min(progress * 1.5, 1) : 1;
}

function updateGalleryPhoto(index) {
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    const album = albums[browsingAlbumIndex];
    currentPhotoIndex = index;

    if (locationHintEl) {
        locationHintEl.innerHTML = galleryReturnContext === 'home'
            ? `P. ${String(index + 1).padStart(2, '0')}`
            : '';
    }
    if (counterEl) counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;

    preloadGalleryNeighbors(album, index);
    changePhotoWithFade(album.photos[index], false);
}

function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const album = albums[browsingAlbumIndex];

    album.photos.forEach((url, i) => {
        const box = document.createElement('div');
        box.className = 'grid-box';

        const img = document.createElement('img');
        img.src = url;
        img.className = 'grid-item';
        img.dataset.index = String(i);
        img.alt = 'Photo';

        box.appendChild(img);
        gridContainer.appendChild(box);
    });

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            currentPhotoIndex = parseInt(e.target.getAttribute('data-index'), 10);
            updateGalleryPhoto(currentPhotoIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            homeAlbumIndex = (homeAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover(false);
        } else {
            const album = albums[browsingAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            homeAlbumIndex = (homeAlbumIndex + 1) % albums.length;
            updateAlbumCover(false);
        } else {
            const album = albums[browsingAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

function openGalleryDirectly(albumIndex, returnContext = 'home') {
    browsingAlbumIndex = albumIndex;
    currentAlbumIndex = albumIndex;
    currentPhotoIndex = 0;
    isGalleryMode = true;
    galleryReturnContext = returnContext;
    hideMapHoverLabel();

    const bgPhotoEl = document.getElementById('bg-photo');
    if (bgPhotoEl) {
        bgPhotoEl.classList.add('gallery-layout');
        bgPhotoEl.style.opacity = 1;
    }

    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.style.opacity = 0;
        mapContainer.style.pointerEvents = 'none';
    }

    const backToMapBtn = document.getElementById('back-to-map-btn');
    if (backToMapBtn) {
        backToMapBtn.style.opacity = 0;
        backToMapBtn.style.pointerEvents = 'none';
    }

    hidePreview(true);
    document.getElementById('main-title-container').style.opacity = 0;
    document.getElementById('main-title-container').style.pointerEvents = 'none';
    document.getElementById('dark-overlay').style.opacity = 0;
    document.getElementById('gallery-counter').style.opacity = 1;
    document.getElementById('open-index-btn').style.opacity = 1;

    if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
    if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }

    const locationHint = document.getElementById('location-hint');
    if (locationHint) {
        locationHint.classList.remove('light-mode');
        locationHint.style.opacity = returnContext === 'home' ? 1 : 0;
    }

    const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
    if (closeGalleryBtn) {
        closeGalleryBtn.style.opacity = 1;
        closeGalleryBtn.style.pointerEvents = 'auto';
    }

    document.body.style.overflowY = 'hidden';
    preloadAlbumPhotos(albumIndex, 0);
    updateGalleryPhoto(0);
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) mainTitleEl.addEventListener('click', () => openGalleryDirectly(homeAlbumIndex));

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;
        const shouldReturnToMap = galleryReturnContext === 'map';
        galleryReturnContext = 'home';

        const bgPhotoEl = document.getElementById('bg-photo');
        if (bgPhotoEl) {
            bgPhotoEl.classList.remove('gallery-layout');
            bgPhotoEl.classList.remove('portrait-layout');
            bgPhotoEl.style.transition = 'none';
        }

        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        document.getElementById('gallery-index-panel').classList.remove('open');
        closeGalleryBtnEl.style.opacity = 0;
        closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll';

        if (btnPrev) { btnPrev.style.opacity = '0'; btnPrev.style.pointerEvents = 'none'; }
        if (btnNext) { btnNext.style.opacity = '0'; btnNext.style.pointerEvents = 'none'; }

        if (shouldReturnToMap) {
            returnToMapAfterGallery();
        } else {
            document.getElementById('main-title-container').style.opacity = 1;
            document.getElementById('main-title-container').style.pointerEvents = 'auto';
            document.getElementById('dark-overlay').style.opacity = 0.4;
            if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
            if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }
            updateAlbumCover(true);
            restoreHomeHint();
        }
    });
}

function returnToMapAfterGallery() {
    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');
    const locationHint = document.getElementById('location-hint');
    const backBtn = document.getElementById('back-to-map-btn');

    updateAlbumCover(true);

    if (mainTitleContainer) {
        mainTitleContainer.style.opacity = 0;
        mainTitleContainer.style.pointerEvents = 'none';
    }
    if (darkOverlay) darkOverlay.style.opacity = 0;
    if (bgPhoto) {
        bgPhoto.style.transition = 'none';
        bgPhoto.style.opacity = 0;
    }
    if (mapContainer) {
        mapContainer.style.opacity = 1;
        mapContainer.style.pointerEvents = 'auto';
    }
    if (locationHint) {
        locationHint.classList.add('light-mode');
        locationHint.innerHTML = '';
        locationHint.style.opacity = 0;
    }
    if (backBtn && currentLayer > 1) {
        backBtn.style.opacity = 1;
        backBtn.style.pointerEvents = 'auto';
    }

    updateLocationHintText();
}

if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', (e) => {
        e.stopPropagation();
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

    const album = albums[browsingAlbumIndex];
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
    const currentAlbum = albums[homeAlbumIndex];

    if (progress < 0.2) {
        if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
        if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }
    } else {
        if (btnPrev) { btnPrev.style.opacity = '0'; btnPrev.style.pointerEvents = 'none'; }
        if (btnNext) { btnNext.style.opacity = '0'; btnNext.style.pointerEvents = 'none'; }
    }

    if (progress <= 1) {
        hideMapHoverLabel();
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location;
            locationHint.style.opacity = Math.min(progress * 1.5, 1);
            locationHint.classList.remove('light-mode');
        }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } else if (progress > 1 && progress <= MAP_REVEAL_START) {
        hideMapHoverLabel();
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location;
            locationHint.style.opacity = 1;
            locationHint.classList.remove('light-mode');
        }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } else if (progress > MAP_REVEAL_START) {
        const stage3Progress = Math.min((progress - MAP_REVEAL_START) / MAP_REVEAL_LENGTH, 1);
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = Math.max(0, 1 - stage3Progress * 2.5); }
        if (locationHint) {
            locationHint.innerHTML = '';
            locationHint.style.opacity = 0;
        }

        if (mapContainer) {
            mapContainer.style.transition = 'none';
            const mapOpacity = Math.min(stage3Progress * 2.5, 1);
            mapContainer.style.opacity = mapOpacity;
            if (stage3Progress > 0.02) {
                mapContainer.style.pointerEvents = 'auto';
                updateLocationHintText();
                if (locationHint) {
                    locationHint.classList.toggle('light-mode', mapOpacity > 0.72);
                }
            } else {
                mapContainer.style.pointerEvents = 'none';
                if (locationHint) locationHint.classList.remove('light-mode');
            }
        }
    }
});

function updateLocationHintText() {
    const hint = document.getElementById('location-hint');
    if (!hint) return;

    hint.innerHTML = '';
    hint.style.opacity = 0;
}

function getPrefectureTitle(g) {
    if (!g) return '';
    const rawTitle = g.dataset.prefTitle || '';
    return rawTitle ? rawTitle.split(' / ')[0] : '';
}

function getPrefectureTitleForPin(pin) {
    const prefClass = pin ? pin.getAttribute('data-pref-class') : '';
    const pref = prefClass ? document.querySelector(`.prefectures g.prefecture.${prefClass}`) : null;
    return getPrefectureTitle(pref);
}

function getPinOffset(order = 0, total = 1) {
    if (total <= 1) return { x: 0, y: 0 };

    const radius = total <= 2 ? 9 : 12;
    const angle = (-90 + (360 / total) * order) * Math.PI / 180;

    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    };
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function mercatorRaw(lng, lat) {
    const latRad = clamp(lat, -85, 85) * Math.PI / 180;
    return {
        x: lng,
        y: Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * 180 / Math.PI
    };
}

function forEachGeoCoordinate(features, callback) {
    features.forEach(feature => {
        const polys = feature.geometry?.coordinates || [];
        polys.forEach(poly => {
            poly.forEach(ring => {
                ring.forEach(([lng, lat]) => callback(lng, lat));
            });
        });
    });
}

function createMapProjection(features) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    forEachGeoCoordinate(features, (lng, lat) => {
        const p = mercatorRaw(lng, lat);
        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
    });

    const padding = 54;
    const scale = Math.min(
        (1000 - padding * 2) / (maxX - minX),
        (1000 - padding * 2) / (maxY - minY)
    );
    const drawnWidth = (maxX - minX) * scale;
    const drawnHeight = (maxY - minY) * scale;
    const offsetX = (1000 - drawnWidth) / 2;
    const offsetY = (1000 - drawnHeight) / 2;

    return function project(lng, lat) {
        const p = mercatorRaw(lng, lat);
        return {
            x: offsetX + (p.x - minX) * scale,
            y: offsetY + (maxY - p.y) * scale
        };
    };
}

function geoRingToPath(ring) {
    if (!mapProjection || !ring.length) return '';

    return ring.map(([lng, lat], index) => {
        const p = mapProjection(lng, lat);
        return `${index === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(' ') + ' Z';
}

function geoFeatureToPath(feature) {
    return feature.geometry.coordinates
        .map(poly => poly.map(geoRingToPath).join(' '))
        .join(' ');
}

function getProjectedSpotPoint(item, prefG) {
    if (mapProjection && Number.isFinite(item.lat) && Number.isFinite(item.lng)) {
        return mapProjection(item.lng, item.lat);
    }

    return getCenterInsidePrefectureContainer(prefG);
}

function getPrefectureGroupFromAnchor(anchor) {
    if (!anchor) return null;
    if (anchor.classList && anchor.classList.contains('prefecture')) return anchor;

    const prefClass = typeof anchor.getAttribute === 'function' ? anchor.getAttribute('data-pref-class') : '';
    return prefClass ? document.querySelector(`.prefectures g.prefecture.${prefClass}`) : null;
}

function getRegionClass(gElement) {
    const codeAttr = gElement.getAttribute('data-code');
    if (!codeAttr) return null;

    const code = parseInt(codeAttr, 10);
    if (code === 47) return 'region-okinawa';
    if (code === 1) return 'region-hokkaido';
    if (code >= 2 && code <= 7) return 'region-tohoku';
    if (code >= 8 && code <= 14) return 'region-kanto';
    if (code >= 15 && code <= 23) return 'region-chubu';
    if (code >= 24 && code <= 30) return 'region-kinki';
    if (code >= 31 && code <= 35) return 'region-chugoku';
    if (code >= 36 && code <= 39) return 'region-shikoku';
    if (code >= 40 && code <= 46) return 'region-kyushu';
    return null;
}

function getCombinedScreenRect(elements) {
    const visibleRects = elements
        .filter(el => el && el.style.display !== 'none')
        .map(el => (typeof el.getBoundingClientRect === 'function' ? el.getBoundingClientRect() : null))
        .filter(rect => rect && rect.width > 0 && rect.height > 0);

    if (visibleRects.length === 0) return null;

    return visibleRects.reduce((merged, rect) => ({
        left: Math.min(merged.left, rect.left),
        top: Math.min(merged.top, rect.top),
        right: Math.max(merged.right, rect.right),
        bottom: Math.max(merged.bottom, rect.bottom),
        width: Math.max(merged.right, rect.right) - Math.min(merged.left, rect.left),
        height: Math.max(merged.bottom, rect.bottom) - Math.min(merged.top, rect.top)
    }), {
        left: visibleRects[0].left,
        top: visibleRects[0].top,
        right: visibleRects[0].right,
        bottom: visibleRects[0].bottom,
        width: visibleRects[0].width,
        height: visibleRects[0].height
    });
}

function showMapHoverLabel(text, anchor, hasAlbums = false, preferredSide = 'auto') {
    const label = document.getElementById('map-hover-label');
    if (!label || !text) return;

    const rect = Array.isArray(anchor)
        ? getCombinedScreenRect(anchor)
        : (anchor && typeof anchor.getBoundingClientRect === 'function' ? anchor.getBoundingClientRect() : null);

    if (!rect) return;

    label.textContent = text;
    label.classList.toggle('has-albums', hasAlbums);
    label.classList.add('visible');

    const gap = 14;
    const labelWidth = label.offsetWidth || 120;
    const labelHeight = label.offsetHeight || 32;
    const placeLeft = preferredSide === 'left'
        || (preferredSide !== 'right' && rect.right + gap + labelWidth > window.innerWidth - 16);
    const x = placeLeft ? rect.left - labelWidth - gap : rect.right + gap;
    const y = rect.top + rect.height / 2 - labelHeight / 2;

    label.style.left = `${Math.max(16, Math.min(window.innerWidth - labelWidth - 16, x))}px`;
    label.style.top = `${Math.max(16, Math.min(window.innerHeight - labelHeight - 16, y))}px`;
}

function hideMapHoverLabel() {
    const label = document.getElementById('map-hover-label');
    if (!label) return;

    label.classList.remove('visible', 'has-albums');
}

function getRegionMembers(regionClass) {
    return Array.from(document.querySelectorAll(`.prefectures g.prefecture.${regionClass}`));
}

function setSvgMapClass(layerClass) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap) return;
    svgMap.setAttribute('class', `geolonia-svg-map ${layerClass}`.trim());
}

function setActiveMapFocus(prefectureGroup = null, albumIndex = null) {
    document.querySelectorAll('.prefectures g.prefecture').forEach(el => {
        el.classList.toggle('active-prefecture', el === prefectureGroup);
    });

    document.querySelectorAll('.spot-pin').forEach(pin => {
        const albumIndexes = (pin.getAttribute('data-album-indexes') || '').split(',');
        pin.classList.toggle('active-spot', albumIndexes.includes(String(albumIndex)));
    });
}

function setViewBox(box) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap) return;

    currentViewBox = { ...box };
    svgMap.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateViewBox(targetBox, duration = 850) {
    if (viewBoxAnimationId) cancelAnimationFrame(viewBoxAnimationId);

    const startBox = { ...currentViewBox };
    const startTime = performance.now();

    function tick(now) {
        const rawProgress = Math.min((now - startTime) / duration, 1);
        const p = easeOutCubic(rawProgress);

        const nextBox = {
            x: startBox.x + (targetBox.x - startBox.x) * p,
            y: startBox.y + (targetBox.y - startBox.y) * p,
            width: startBox.width + (targetBox.width - startBox.width) * p,
            height: startBox.height + (targetBox.height - startBox.height) * p
        };

        setViewBox(nextBox);

        if (rawProgress < 1) {
            viewBoxAnimationId = requestAnimationFrame(tick);
        } else {
            viewBoxAnimationId = null;
            setViewBox(targetBox);
        }
    }

    viewBoxAnimationId = requestAnimationFrame(tick);
}

function getBoundsInSvg(elements) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap || !elements || !elements.length) return null;

    const svgScreenMatrix = svgMap.getScreenCTM();
    if (!svgScreenMatrix) return null;

    const screenToSvg = svgScreenMatrix.inverse();
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    elements.forEach(el => {
        if (!el || el.style.display === 'none') return;

        let box;
        try {
            box = el.getBBox();
        } catch (err) {
            return;
        }

        if (!box || box.width === 0 || box.height === 0) return;

        const localToScreen = el.getScreenCTM();
        if (!localToScreen) return;

        const corners = [
            { x: box.x, y: box.y },
            { x: box.x + box.width, y: box.y },
            { x: box.x, y: box.y + box.height },
            { x: box.x + box.width, y: box.y + box.height }
        ];

        corners.forEach(corner => {
            const point = svgMap.createSVGPoint();
            point.x = corner.x;
            point.y = corner.y;

            const screenPoint = point.matrixTransform(localToScreen);
            const svgPoint = screenPoint.matrixTransform(screenToSvg);

            minX = Math.min(minX, svgPoint.x);
            minY = Math.min(minY, svgPoint.y);
            maxX = Math.max(maxX, svgPoint.x);
            maxY = Math.max(maxY, svgPoint.y);
        });
    });

    if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
        return null;
    }

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}

function getRegionBounds(regionClass) {
    const members = Array.from(document.querySelectorAll(`.prefectures g.prefecture.${regionClass}`));
    return getBoundsInSvg(members);
}

function getPrefectureBounds(prefectureGroup) {
    return getBoundsInSvg([prefectureGroup]);
}

function fitMapToBounds(bounds, options = {}) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap || !bounds) return;

    const padding = options.padding ?? 1.45;
    const minWidth = options.minWidth ?? 0;
    const duration = options.duration ?? MAP_ANIMATION_FAST;

    const svgWidth = svgMap.clientWidth || originalViewBox.width;
    const svgHeight = svgMap.clientHeight || originalViewBox.height;
    const viewportRatio = svgWidth / svgHeight;

    let targetWidth = Math.max(bounds.width * padding, minWidth);
    let targetHeight = bounds.height * padding;

    if (targetWidth / targetHeight > viewportRatio) {
        targetHeight = targetWidth / viewportRatio;
    } else {
        targetWidth = targetHeight * viewportRatio;
    }

    if (targetWidth < minWidth) {
        targetWidth = minWidth;
        targetHeight = targetWidth / viewportRatio;
    }

    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;

    const targetBox = {
        x: centerX - targetWidth / 2,
        y: centerY - targetHeight / 2,
        width: targetWidth,
        height: targetHeight
    };

    animateViewBox(targetBox, duration);
}

function resetMapView() {
    animateViewBox(originalViewBox, MAP_ANIMATION_FAST);
}

function getCenterInsidePrefectureContainer(g) {
    const bounds = getPrefectureBounds(g);
    if (!bounds) return { x: 500, y: 500 };

    return {
        x: bounds.x + bounds.width / 2,
        y: bounds.y + bounds.height / 2
    };
}

function loadAndInitMap() {
    fetch('japan-prefectures.geojson')
        .then(response => response.json())
        .then(geoData => {
            const wrapper = document.getElementById('map-svg-wrapper');
            if (!wrapper) return;

            const features = (geoData.features || []).sort((a, b) => a.properties.id - b.properties.id);
            mapProjection = createMapProjection(features);

            wrapper.innerHTML = '';
            const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgEl.setAttribute('id', 'japan-map');
            svgEl.setAttribute('class', 'geolonia-svg-map map-layer-1');
            svgEl.setAttribute('viewBox', '0 0 1000 1000');
            svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            wrapper.appendChild(svgEl);

            originalViewBox = {
                x: 0,
                y: 0,
                width: 1000,
                height: 1000
            };
            currentViewBox = { ...originalViewBox };

            const zoomGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            zoomGroup.setAttribute('id', 'map-zoom-group');
            zoomGroup.setAttribute('class', 'svg-map');
            svgEl.appendChild(zoomGroup);

            const prefContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            prefContainer.setAttribute('class', 'prefectures');
            zoomGroup.appendChild(prefContainer);

            features.forEach(feature => {
                const code = feature.properties.id;
                const prefClass = prefectureClassByCode[code];
                if (!prefClass) return;

                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('class', `${prefClass} prefecture`);
                g.setAttribute('data-code', String(code));
                g.dataset.prefTitle = feature.properties.name;

                const regionClass = getRegionClass(g);
                if (regionClass) g.classList.add(regionClass);

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', geoFeatureToPath(feature));
                g.appendChild(path);
                prefContainer.appendChild(g);
            });

            const regionBadgesLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            regionBadgesLayer.setAttribute('id', 'region-badges-layer');
            prefContainer.appendChild(regionBadgesLayer);

            const spotsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            spotsLayer.setAttribute('id', 'spots-layer');

            Object.entries(getContentByPrefecture()).forEach(([prefClass, prefContent]) => {
                const prefG = prefContainer.querySelector(`.${prefClass}`);
                const regionClass = prefG ? getRegionClass(prefG) : '';
                const prefAlbums = (prefContent.albums || []).map(album => ({
                    ...album,
                    pinType: 'album',
                    pinId: album.spotId,
                    albumIndexes: [album.albumIndex],
                    smallLightIndexes: []
                }));
                const prefSmallLights = (prefContent.smallLights || []).map(light => ({
                    ...light,
                    pinType: 'small-light',
                    pinId: light.spotId,
                    albumIndexes: [],
                    smallLightIndexes: [light.smallLightIndex]
                }));
                const prefPins = [...prefAlbums, ...prefSmallLights];
                if (prefPins.length === 0) return;

                prefPins.forEach((pinData, pinOrder) => {
                    const pin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    pin.setAttribute('class', `map-pin spot-pin pin-${pinData.pinType} ${regionClass} ${prefClass}`.trim());
                    pin.setAttribute('data-pref-class', prefClass);
                    pin.setAttribute('data-pin-order', String(pinOrder));
                    pin.setAttribute('data-pin-total', String(prefPins.length));
                    pin.setAttribute('data-pin-type', pinData.pinType);
                    pin.setAttribute('data-lat', String(pinData.lat ?? ''));
                    pin.setAttribute('data-lng', String(pinData.lng ?? ''));
                    pin.setAttribute('data-album-indexes', pinData.albumIndexes.join(','));
                    pin.setAttribute('data-small-light-indexes', pinData.smallLightIndexes.join(','));
                    pin.setAttribute('id', pinData.pinId);

                    pin.innerHTML = pinData.pinType === 'small-light'
                        ? `
                            <g transform="translate(-4, -4)">
                                <path d="M4,0.7 L7.3,4 L4,7.3 L0.7,4 Z" class="pin-body"/>
                                <circle cx="4" cy="4" r="1.1" class="pin-core"/>
                            </g>
                        `
                        : `
                            <g transform="translate(-3.8, -3.8)">
                                <circle cx="3.8" cy="3.8" r="3.25" class="pin-body"/>
                                <circle cx="3.8" cy="3.8" r="1.1" class="pin-core"/>
                            </g>
                        `;
                    spotsLayer.appendChild(pin);
                });
            });
            prefContainer.appendChild(spotsLayer);

            markAlbumRegions();
            positionAlbumPins();
            positionRegionBadges();

            requestAnimationFrame(() => {
                try {
                    calculateGeometries();
                } catch (err) {
                    console.warn('地圖標記定位略過，保留基本相簿提示:', err);
                    markAlbumRegions();
                    positionAlbumPins();
                    positionRegionBadges();
                }
                setupStageEvents();
            });
        })
        .catch(err => console.error('地圖加載失敗:', err));
}

function calculateGeometries() {
    const svgEl = document.getElementById('japan-map');
    const prefGroups = document.querySelectorAll('.prefectures g.prefecture');
    if (!svgEl) return;

    prefGroups.forEach(g => {
        if (g.style.display === 'none') return;

        const parts = Array.from(g.querySelectorAll('path, polygon'));
        if (parts.length === 0) return;

        let matrix = svgEl.createSVGMatrix();
        if (g.transform && g.transform.baseVal && g.transform.baseVal.numItems > 0) {
            matrix = g.transform.baseVal.consolidate().matrix;
        }

        let maxArea = 0;
        let mainlandCenter = { x: 0, y: 0 };

        const partData = parts.map(part => {
            const box = part.getBBox();
            const point = svgEl.createSVGPoint();
            point.x = box.x + box.width / 2;
            point.y = box.y + box.height / 2;
            const center = point.matrixTransform(matrix);
            return {
                part,
                area: box.width * box.height,
                cx: center.x,
                cy: center.y
            };
        });

        partData.forEach(d => {
            if (d.area > maxArea) {
                maxArea = d.area;
                mainlandCenter = { x: d.cx, y: d.cy };
            }
        });

        partData.forEach(d => {
            const distance = Math.hypot(d.cx - mainlandCenter.x, d.cy - mainlandCenter.y);
            if (distance > 220) d.part.remove();
        });

        const bounds = getPrefectureBounds(g);
        if (bounds) {
            g.dataset.mapX = String(bounds.x);
            g.dataset.mapY = String(bounds.y);
            g.dataset.mapWidth = String(bounds.width);
            g.dataset.mapHeight = String(bounds.height);
        }

        const center = getCenterInsidePrefectureContainer(g);
        g.setAttribute('data-center-x', String(center.x));
        g.setAttribute('data-center-y', String(center.y));
    });

    markAlbumRegions();
    positionAlbumPins();
    positionRegionBadges();
}

function markAlbumRegions() {
    const albumRegionClasses = new Set();

    [...albums, ...smallLights].forEach(item => {
        const prefG = document.querySelector(`.prefectures g.prefecture${item.selector}`);
        if (!prefG) return;

        const regionClass = getRegionClass(prefG);
        if (regionClass) albumRegionClasses.add(regionClass);
        prefG.classList.add('album-prefecture');
    });

    albumRegionClasses.forEach(regionClass => {
        document.querySelectorAll(`.prefectures .${regionClass}`).forEach(pref => {
            pref.classList.add('album-region');
        });
    });
}

function positionAlbumPins() {
    Object.entries(getContentByPrefecture()).forEach(([prefClass]) => {
        const prefG = document.querySelector(`.prefectures g.prefecture.${prefClass}`);
        const spotPins = Array.from(document.querySelectorAll(`.spot-pin[data-pref-class="${prefClass}"]`));
        if (!prefG || spotPins.length === 0) return;

        if (getPrefectureBounds(prefG)) {
            spotPins.forEach((spotPin, fallbackOrder) => {
                const order = parseInt(spotPin.getAttribute('data-pin-order'), 10);
                const total = parseInt(spotPin.getAttribute('data-pin-total'), 10);
                const albumIndex = parseInt((spotPin.getAttribute('data-album-indexes') || '').split(',')[0], 10);
                const smallLightIndex = parseInt((spotPin.getAttribute('data-small-light-indexes') || '').split(',')[0], 10);
                const item = Number.isFinite(albumIndex)
                    ? albums[albumIndex]
                    : (Number.isFinite(smallLightIndex) ? smallLights[smallLightIndex] : null);
                const point = item
                    ? getProjectedSpotPoint(item, prefG)
                    : getCenterInsidePrefectureContainer(prefG);
                const offset = getPinOffset(
                    Number.isFinite(order) ? order : fallbackOrder,
                    Number.isFinite(total) ? total : spotPins.length
                );
                spotPin.setAttribute('transform', `translate(${point.x + offset.x}, ${point.y + offset.y})`);
            });
        }
    });
}

function positionRegionBadges() {
    const layer = document.getElementById('region-badges-layer');
    if (!layer) return;

    layer.innerHTML = '';

    REGION_CLASSES.forEach(regionClass => {
        const regionContent = getContentForRegion(regionClass);
        if (regionContent.count === 0) return;

        const bounds = getRegionBounds(regionClass);
        if (!bounds) return;

        const badge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        badge.setAttribute('class', `region-album-badge ${regionClass}`);
        badge.setAttribute('transform', `translate(${bounds.x + bounds.width / 2}, ${bounds.y + bounds.height / 2})`);
        badge.innerHTML = `
            <circle r="19" class="region-badge-halo"></circle>
            <circle r="12" class="region-badge-dot"></circle>
            <text y="0" class="region-badge-count">${regionContent.count}</text>
        `;
        layer.appendChild(badge);
    });
}

function setupStageEvents() {
    const svgMap = document.getElementById('japan-map');
    const backBtn = document.getElementById('back-to-map-btn');
    if (!svgMap) return;

    const previewCard = document.getElementById('map-preview-card');
    if (previewCard) {
        previewCard.addEventListener('mouseenter', () => {
            previewInteractionLocked = true;
            cancelPreviewHide();
        });
        previewCard.addEventListener('mouseleave', () => {
            previewInteractionLocked = false;
            schedulePreviewHide();
        });
    }

    const previewBridge = document.getElementById('map-preview-bridge');
    if (previewBridge) {
        previewBridge.addEventListener('mouseenter', () => {
            previewInteractionLocked = true;
            cancelPreviewHide();
        });
        previewBridge.addEventListener('mouseleave', () => {
            previewInteractionLocked = false;
            schedulePreviewHide();
        });
    }

    document.querySelectorAll('.prefectures g.prefecture').forEach(g => {
        g.addEventListener('mouseenter', (e) => {
            if (isGalleryMode) return;
            if (expandedSmallLightIndex !== null) return;
            if (shouldHoldPreviewFor(g)) return;
            if (g.style.display === 'none') return;
            const localRegion = getRegionClass(g);

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.add('region-hover-pulse'));
                    const regionContent = getContentForRegion(localRegion);
                    const labelText = regionContent.count > 0
                        ? `${regionNames[localRegion]} · ${regionContent.count} 則拾光`
                        : regionNames[localRegion];
                    showMapHoverLabel(labelText, getRegionMembers(localRegion), regionContent.count > 0);
                }
            } else if (currentLayer === 2) {
                if (localRegion && g.classList.contains(activeRegionClass)) {
                    const prefContent = getContentForPrefecture(g);
                    if (prefContent.albums.length > 0 || prefContent.smallLights.length > 0) {
                        showMapHoverLabel(`${getPrefectureTitle(g)} · 以圖釘選擇拾光`, g, true);
                    } else {
                        showMapHoverLabel(getPrefectureTitle(g), g);
                    }
                }
            }
        });

        g.addEventListener('mouseleave', () => {
            if (isGalleryMode) return;
            const localRegion = getRegionClass(g);

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.remove('region-hover-pulse'));
                }
            } else if (currentLayer === 2) {
                g.classList.remove('pref-hover-pulse');
            }

            hideMapHoverLabel();
            updateLocationHintText();
        });

        g.addEventListener('mousemove', () => {
            if (isGalleryMode) return;
            if (expandedSmallLightIndex !== null) return;
            if (shouldHoldPreviewFor(g)) return;
            if (currentLayer !== 2 || g.style.display === 'none') return;

            const localRegion = getRegionClass(g);
            if (!localRegion || !g.classList.contains(activeRegionClass)) return;

            const prefContent = getContentForPrefecture(g);
            const labelText = prefContent.albums.length > 0 || prefContent.smallLights.length > 0
                ? `${getPrefectureTitle(g)} · 以圖釘選擇拾光`
                : getPrefectureTitle(g);
            showMapHoverLabel(labelText, g, prefContent.albums.length > 0 || prefContent.smallLights.length > 0);
        });

        g.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isGalleryMode) return;
            if (g.style.display === 'none') return;

            if (currentLayer === 1) {
                activeRegionClass = getRegionClass(g);
                if (!activeRegionClass) return;

                const bounds = getRegionBounds(activeRegionClass);
                const fit = regionFitOptions[activeRegionClass] || { padding: 1.45, minWidth: 220 };
                fitMapToBounds(bounds, {
                    padding: fit.padding,
                    minWidth: fit.minWidth,
                    duration: MAP_ANIMATION_FAST
                });

                currentLayer = 2;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass(`map-layer-2 ${activeRegionClass}`);
                hideMapHoverLabel();

                if (backBtn) {
                    backBtn.style.opacity = 1;
                    backBtn.style.pointerEvents = 'auto';
                }

                updateLocationHintText();
            } else if (currentLayer === 2) {
                return;
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            if (currentLayer === 3) {
                const bounds = getRegionBounds(activeRegionClass);
                const fit = regionFitOptions[activeRegionClass] || { padding: 1.45, minWidth: 220 };
                fitMapToBounds(bounds, {
                    padding: fit.padding,
                    minWidth: fit.minWidth,
                    duration: MAP_ANIMATION_FAST
                });

                currentLayer = 2;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass(`map-layer-2 ${activeRegionClass}`);
                hidePreview(true);
                updateLocationHintText();
            } else if (currentLayer === 2) {
                resetMapView();
                currentLayer = 1;
                activeRegionClass = null;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass('map-layer-1');

                backBtn.style.opacity = 0;
                backBtn.style.pointerEvents = 'none';

                document.querySelectorAll('.prefectures g.prefecture').forEach(el => {
                    el.classList.remove('region-hover-pulse', 'pref-hover-pulse');
                });

                hidePreview(true);
                hideMapHoverLabel();
                updateLocationHintText();
            }
        });
    }

    document.querySelectorAll('.spot-pin').forEach(pin => {
        const albumIndexes = (pin.getAttribute('data-album-indexes') || '')
            .split(',')
            .map(value => parseInt(value, 10))
            .filter(Number.isFinite);
        const pinAlbums = albumIndexes.map(index => ({ ...albums[index], albumIndex: index })).filter(Boolean);
        const smallLightIndexes = (pin.getAttribute('data-small-light-indexes') || '')
            .split(',')
            .map(value => parseInt(value, 10))
            .filter(Number.isFinite);
        const pinSmallLights = smallLightIndexes.map(index => ({ ...smallLights[index], smallLightIndex: index })).filter(Boolean);

        pin.addEventListener('mouseenter', () => {
            if (isGalleryMode) return;
            if (expandedSmallLightIndex !== null) return;
            if (currentLayer !== 2 && currentLayer !== 3) return;
            showContentPreview(pinAlbums, pinSmallLights, getPrefectureTitleForPin(pin), pin);
        });
        pin.addEventListener('mousemove', () => {
            if (!isGalleryMode && expandedSmallLightIndex === null) cancelPreviewHide();
        });

        pin.addEventListener('mouseleave', () => {
            if (!isGalleryMode && expandedSmallLightIndex === null) schedulePreviewHide();
        });
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isGalleryMode) return;
            showContentPreview(pinAlbums, pinSmallLights, getPrefectureTitleForPin(pin), pin, { lock: true });
        });
    });
}

function showContentPreview(albumList = [], smallLightList = [], heading, anchor = null, options = {}) {
    const card = document.getElementById('map-preview-card');
    const safeAlbums = albumList || [];
    const safeSmallLights = smallLightList || [];
    if (!card || (safeAlbums.length === 0 && safeSmallLights.length === 0)) return;
    cancelPreviewHide();

    expandedSmallLightIndex = null;
    if (anchor !== previewAnchorElement && !options.lock) {
        previewInteractionLocked = false;
    }
    previewAnchorElement = anchor;
    previewInteractionLocked = previewInteractionLocked || Boolean(options.lock);
    const key = `content:${heading || ''}:a${safeAlbums.map(album => album.albumIndex).join(',')}:s${safeSmallLights.map(light => light.smallLightIndex).join(',')}`;
    const previewItems = [
        ...safeAlbums.map(album => ({ type: 'album', title: album.spotName, image: album.photos[0] })),
        ...safeSmallLights.map(light => ({ type: 'small-light', title: light.spotName, image: light.photos[0] }))
    ];

    preloadSmallLights(safeSmallLights);

    card.classList.add('choice-mode');
    card.classList.remove('expanded-light');

    if (previewContentKey !== key) {
        const coverStack = previewItems.slice(0, 3).map((item, index) => `
            <img class="preview-stack-img preview-stack-${index}" src="${item.image}" alt="${escapeHtml(item.title)}">
        `).join('');
        const albumItems = safeAlbums.map(album => `
            <button class="preview-album-btn" type="button" data-album-index="${album.albumIndex}">
                <img src="${album.photos[0]}" alt="">
                <span>
                    <strong>${escapeHtml(album.spotName)}</strong>
                    <small>${escapeHtml(album.title)}</small>
                </span>
            </button>
        `).join('');
        const smallLightItems = safeSmallLights.map(light => `
            <button class="preview-album-btn preview-small-light-btn" type="button" data-small-light-index="${light.smallLightIndex}">
                <img src="${light.photos[0]}" alt="" loading="eager" decoding="async">
                <span>
                    <strong>${escapeHtml(light.spotName)}</strong>
                    <small>${escapeHtml(light.title)}</small>
                </span>
            </button>
        `).join('');

        card.innerHTML = `
            <div class="preview-cover-stack">${coverStack}</div>
            <div class="preview-kicker">拾光索引</div>
            <div class="preview-title">${escapeHtml(heading || getPrefectureTitle(anchor) || '相簿')}</div>
            <div class="preview-subtitle">選擇一段拾光開始回味</div>
            ${albumItems ? `<div class="preview-section-label">旅頁拾光</div><div class="preview-album-list">${albumItems}</div>` : ''}
            ${smallLightItems ? `<div class="preview-section-label">小拾光</div><div class="preview-album-list">${smallLightItems}</div>` : ''}
        `;

        card.querySelectorAll('.preview-album-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const albumIndex = parseInt(button.getAttribute('data-album-index'), 10);
                const smallLightIndex = parseInt(button.getAttribute('data-small-light-index'), 10);
                if (Number.isFinite(albumIndex)) {
                    hidePreview(true);
                    openGalleryDirectly(albumIndex, 'map');
                } else if (Number.isFinite(smallLightIndex)) {
                    showSmallLightDetail(smallLightIndex, heading, anchor);
                }
            });
        });

        previewContentKey = key;
    }

    card.style.opacity = 1;
    requestAnimationFrame(() => positionPreviewCard(card, anchor));
}

function positionPreviewCard(card, anchor = null, expanded = false) {
    card.classList.remove('placement-left', 'placement-right', 'placement-top', 'placement-bottom');

    const measuredWidth = card.offsetWidth || (expanded ? Math.min(640, window.innerWidth - 32) : 260);
    const measuredHeight = card.offsetHeight || (expanded ? Math.min(520, window.innerHeight - 40) : 250);
    const cardWidth = Math.min(measuredWidth, window.innerWidth - 32);
    const cardHeight = Math.min(measuredHeight, window.innerHeight - 32);
    const clampX = value => Math.max(16, Math.min(value, window.innerWidth - cardWidth - 16));
    const clampY = value => Math.max(16, Math.min(value, window.innerHeight - cardHeight - 16));

    if (anchor) {
        const rect = typeof anchor.getBoundingClientRect === 'function' ? anchor.getBoundingClientRect() : null;
        if (rect) {
            const gap = expanded ? 28 : 18;
            const placement = expanded
                ? getExpandedPreviewPlacement(rect, cardWidth, cardHeight, gap)
                : getPreviewCardPlacement(rect, cardWidth, cardHeight, gap, anchor);

            card.classList.add(placement.className);
            card.style.left = `${clampX(placement.left)}px`;
            card.style.top = `${clampY(placement.top)}px`;
            positionPreviewBridge(anchor, card);
        }
    } else {
        const left = Math.min(window.innerWidth * 0.62, window.innerWidth - cardWidth - 18);
        const top = expanded
            ? window.innerHeight / 2 - cardHeight / 2
            : Math.min(window.innerHeight * 0.42, window.innerHeight - cardHeight);
        card.classList.add('placement-right');
        card.style.left = `${clampX(left)}px`;
        card.style.top = `${clampY(top)}px`;
        hidePreviewBridge();
    }
}

function getExpandedPreviewPlacement(rect, cardWidth, cardHeight, gap) {
    const shouldPlaceLeft = rect.left < window.innerWidth * 0.56;
    const preferredLeft = shouldPlaceLeft ? rect.left - cardWidth - gap : rect.right + gap;
    const fallbackLeft = shouldPlaceLeft ? rect.right + gap : rect.left - cardWidth - gap;
    const hasPreferredRoom = shouldPlaceLeft
        ? preferredLeft >= 16
        : preferredLeft + cardWidth <= window.innerWidth - 16;

    return {
        left: hasPreferredRoom ? preferredLeft : fallbackLeft,
        top: window.innerHeight / 2 - cardHeight / 2,
        className: (hasPreferredRoom ? shouldPlaceLeft : !shouldPlaceLeft) ? 'placement-left' : 'placement-right'
    };
}

function getPreviewCardPlacement(rect, cardWidth, cardHeight, gap, anchor) {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mapRect = document.getElementById('map-svg-wrapper')?.getBoundingClientRect();
    const mapCenterY = mapRect ? mapRect.top + mapRect.height / 2 : window.innerHeight / 2;
    const clampX = value => Math.max(16, Math.min(value, window.innerWidth - cardWidth - 16));
    const clampY = value => Math.max(16, Math.min(value, window.innerHeight - cardHeight - 16));
    const blockingRects = getPreviewBlockingRects(anchor);

    const candidates = [
        {
            name: 'top',
            className: 'placement-bottom',
            left: centerX - cardWidth / 2,
            top: rect.top - cardHeight - gap,
            bias: centerY < mapCenterY ? -28 : 10
        },
        {
            name: 'bottom',
            className: 'placement-top',
            left: centerX - cardWidth / 2,
            top: rect.bottom + gap,
            bias: centerY >= mapCenterY ? -28 : 10
        },
        {
            name: 'right',
            className: 'placement-right',
            left: rect.right + gap,
            top: centerY - cardHeight / 2,
            bias: 0
        },
        {
            name: 'left',
            className: 'placement-left',
            left: rect.left - cardWidth - gap,
            top: centerY - cardHeight / 2,
            bias: 0
        }
    ];

    const anchorPoint = { x: centerX, y: centerY };
    let best = null;

    candidates.forEach(candidate => {
        const left = clampX(candidate.left);
        const top = clampY(candidate.top);
        const cardRect = { left, top, right: left + cardWidth, bottom: top + cardHeight };
        const targetPoint = {
            x: Math.max(cardRect.left, Math.min(anchorPoint.x, cardRect.right)),
            y: Math.max(cardRect.top, Math.min(anchorPoint.y, cardRect.bottom))
        };
        const offscreenPenalty = Math.abs(left - candidate.left) + Math.abs(top - candidate.top);
        const distancePenalty = Math.hypot(targetPoint.x - anchorPoint.x, targetPoint.y - anchorPoint.y) * 0.12;
        const routePenalty = blockingRects.reduce((score, blocker) => (
            score + (segmentIntersectsRect(anchorPoint, targetPoint, inflateRect(blocker, 10)) ? 1000 : 0)
        ), 0);
        const overlapPenalty = blockingRects.reduce((score, blocker) => (
            score + (rectsOverlap(cardRect, inflateRect(blocker, 6)) ? 120 : 0)
        ), 0);
        const score = candidate.bias + offscreenPenalty * 3 + distancePenalty + routePenalty + overlapPenalty;

        if (!best || score < best.score) {
            best = { ...candidate, left, top, score };
        }
    });

    return best || candidates[0];
}

function getPreviewBlockingRects(anchor) {
    if (currentLayer !== 2) return [];
    if (!activeRegionClass) return [];
    return [...document.querySelectorAll(`.prefectures g.prefecture.${activeRegionClass}`)]
        .filter(group => group !== anchor)
        .map(group => group.getBoundingClientRect())
        .filter(rect => rect.width > 0 && rect.height > 0)
        .map(rect => ({ left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom }));
}

function inflateRect(rect, amount) {
    return {
        left: rect.left - amount,
        top: rect.top - amount,
        right: rect.right + amount,
        bottom: rect.bottom + amount
    };
}

function rectsOverlap(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function segmentIntersectsRect(start, end, rect) {
    if (pointInRect(start, rect) || pointInRect(end, rect)) return true;
    const edges = [
        [{ x: rect.left, y: rect.top }, { x: rect.right, y: rect.top }],
        [{ x: rect.right, y: rect.top }, { x: rect.right, y: rect.bottom }],
        [{ x: rect.right, y: rect.bottom }, { x: rect.left, y: rect.bottom }],
        [{ x: rect.left, y: rect.bottom }, { x: rect.left, y: rect.top }]
    ];
    return edges.some(([edgeStart, edgeEnd]) => segmentsIntersect(start, end, edgeStart, edgeEnd));
}

function pointInRect(point, rect) {
    return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
}

function segmentsIntersect(a, b, c, d) {
    const direction = (p, q, r) => ((r.x - p.x) * (q.y - p.y)) - ((q.x - p.x) * (r.y - p.y));
    const d1 = direction(c, d, a);
    const d2 = direction(c, d, b);
    const d3 = direction(a, b, c);
    const d4 = direction(a, b, d);
    return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
        ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
}

function positionPreviewBridge(anchor, card) {
    const bridge = document.getElementById('map-preview-bridge');
    if (!bridge || !anchor || !card || expandedSmallLightIndex !== null) {
        hidePreviewBridge();
        return;
    }

    const anchorRect = typeof anchor.getBoundingClientRect === 'function' ? anchor.getBoundingClientRect() : null;
    const cardRect = card.getBoundingClientRect();
    if (!anchorRect || card.style.opacity === '0') {
        hidePreviewBridge();
        return;
    }

    const anchorPoint = {
        x: anchorRect.left + anchorRect.width / 2,
        y: anchorRect.top + anchorRect.height / 2
    };
    const cardPoint = {
        x: Math.max(cardRect.left, Math.min(anchorPoint.x, cardRect.right)),
        y: Math.max(cardRect.top, Math.min(anchorPoint.y, cardRect.bottom))
    };
    const corridor = 42;
    const left = Math.min(anchorPoint.x, cardPoint.x) - corridor / 2;
    const width = Math.max(corridor, Math.abs(cardPoint.x - anchorPoint.x) + corridor);
    const top = Math.min(anchorPoint.y, cardPoint.y) - corridor / 2;
    const height = Math.max(corridor, Math.abs(cardPoint.y - anchorPoint.y) + corridor);

    bridge.style.left = `${Math.max(0, left)}px`;
    bridge.style.top = `${Math.max(0, top)}px`;
    bridge.style.width = `${Math.min(window.innerWidth, width)}px`;
    bridge.style.height = `${Math.min(window.innerHeight - Math.max(0, top), height)}px`;
    bridge.classList.add('active');
}

function hidePreviewBridge() {
    const bridge = document.getElementById('map-preview-bridge');
    if (!bridge) return;
    bridge.classList.remove('active');
    bridge.style.width = '0px';
    bridge.style.height = '0px';
}

function showSmallLightDetail(smallLightIndex, heading, anchor = null) {
    const light = smallLights[smallLightIndex];
    const overlay = document.getElementById('small-light-overlay');
    const title = document.getElementById('small-light-overlay-title');
    const location = document.getElementById('small-light-overlay-location');
    const hand = document.getElementById('small-light-hand');
    if (!overlay || !title || !location || !hand || !light) return;

    cancelPreviewHide();
    preloadSmallLightPhotos(smallLightIndex);
    hidePreview(true);
    expandedSmallLightIndex = smallLightIndex;
    previewAnchorElement = anchor;

    title.textContent = light.title;
    location.textContent = light.location;
    hand.className = `small-light-hand count-${light.photos.length}`;
    hand.innerHTML = light.photos.map((photo, index) => `
        <figure class="small-light-photo-card small-light-photo-${index + 1}" style="--rotate:${getSmallLightCardRotation(index, light.photos.length)}deg; --lift:${getSmallLightCardLift(index, light.photos.length)}px;">
            <img src="${photo}" alt="${escapeHtml(`${light.spotName} ${index + 1}`)}" loading="eager" decoding="async" fetchpriority="high">
        </figure>
    `).join('');

    hand.querySelectorAll('.small-light-photo-card img').forEach(img => {
        const markOrientation = () => {
            if (img.naturalHeight > img.naturalWidth) {
                img.closest('.small-light-photo-card')?.classList.add('is-portrait');
            }
        };
        if (img.complete) markOrientation();
        else img.addEventListener('load', markOrientation, { once: true });
    });

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('small-light-open');
}

function getSmallLightCardRotation(index, count) {
    const rotations = {
        1: [0],
        2: [-3, 3],
        3: [-4, 1.8, 4],
        4: [-4, 2, -2, 4]
    };
    return (rotations[count] || rotations[4])[index] || 0;
}

function getSmallLightCardLift(index, count) {
    const lifts = {
        1: [0],
        2: [16, -10],
        3: [18, -12, 14],
        4: [18, -10, 8, 20]
    };
    return (lifts[count] || lifts[4])[index] || 0;
}

function closeSmallLightOverlay() {
    const overlay = document.getElementById('small-light-overlay');
    const hand = document.getElementById('small-light-hand');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('small-light-open');
    if (hand) hand.innerHTML = '';
    expandedSmallLightIndex = null;
    previewInteractionLocked = false;
    previewAnchorElement = null;
}

function shouldHoldPreviewFor(candidate) {
    const card = document.getElementById('map-preview-card');
    if (!card || card.style.opacity === '0') return false;
    if (!previewAnchorElement || candidate === previewAnchorElement) return false;

    if (expandedSmallLightIndex !== null) return true;

    const bridge = document.getElementById('map-preview-bridge');
    const isOperatingPreview = card.matches(':hover') || Boolean(bridge?.matches(':hover'));
    if (!isOperatingPreview) {
        previewInteractionLocked = false;
        return false;
    }

    return previewInteractionLocked;
}

function cancelPreviewHide() {
    if (previewHideTimer) {
        clearTimeout(previewHideTimer);
        previewHideTimer = null;
    }
}

function schedulePreviewHide() {
    if (expandedSmallLightIndex !== null) return;
    cancelPreviewHide();
    previewHideTimer = setTimeout(() => hidePreview(true), 220);
}

function hidePreview(force = false) {
    const card = document.getElementById('map-preview-card');
    if (card) {
        if (card.classList.contains('choice-mode') && !force) return;
        card.style.opacity = 0;
        card.classList.remove('choice-mode', 'expanded-light');
        card.classList.remove('placement-left', 'placement-right');
        previewContentKey = '';
        previewAnchorElement = null;
        previewInteractionLocked = false;
        expandedSmallLightIndex = null;
        hidePreviewBridge();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    homeAlbumIndex = Math.floor(Math.random() * albums.length);
    preloadAlbumCovers();
    preloadSmallLightCovers();
    warmSmallLightPhotos();
    updateAlbumCover(true);
    loadAndInitMap();

    document.getElementById('small-light-close')?.addEventListener('click', closeSmallLightOverlay);
    document.getElementById('small-light-overlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSmallLightOverlay();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expandedSmallLightIndex !== null) {
            closeSmallLightOverlay();
        }
    });
});
