const CACHE_NAME = 'getaway-cache-v1';
const urlsToCache = [
  // HTML & Icons
  'index.html',
  'ubg235.html',
  'favicon.ico',

  // Build files
  'Build/GetawayShootoutPoki.data.unityweb',
  'Build/GetawayShootoutPoki.json',
  'Build/GetawayShootoutPoki.wasm.code.unityweb',
  'Build/GetawayShootoutPoki.wasm.framework.unityweb',

  // JavaScript files
  'js/v2.313.0/poki-sdk-core-v2.313.0.f.js',
  'js/v2/unity/UnityLoader.2019.2.js',
  'js/v2/master-loader.js',
  'js/v2/poki-sdk.js',
  'js/v2/unity.js',
  'js/analytics_ubg_v1_3.js',
  'js/analytics_ubg_v1_4.js',
  'js/jquery-3.6.0.min.js',
  'js/null.js',
  'js/ubg235_client_v1_0.js',
  'js/ubg235_client_v1_1.js',

  // JSON files
  'json/geo.json',
  'json/null.json',

  // Other
  '934bde36-a4a1-43d0-8b35-30f15feddbb4.png',
  'ahrefs-site-verification_585f4691b0e399a160cb6e0c016b4fcd7b0c55de8ae4d7dc4c83d5d0761520b3',
  '@source.txt',
  'fonts/torus-bold-webfont.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
