'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a2346429846898a53e4edd107f451ff",
"assets/AssetManifest.json": "1ebb158a4057947ed8b285c204e78a45",
"assets/assets/animations/loader_football.json": "0dc5486f92a7083aa95da88a080aed20",
"assets/assets/animations/win_anim.json": "1808204e27a90a6e34ad41257c316345",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/images/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/images/arrow_straight.png": "279b780e1737d7c283504a8ea9a7a73a",
"assets/assets/images/ash.jpg": "26c5fbb4ff173ecd0db7dfb6a00e9acc",
"assets/assets/images/background.png": "3fed7a05c79e6cb5e672471ab7586a2e",
"assets/assets/images/ball.jpg": "65c16a38dde1eb771580d84be62adcb9",
"assets/assets/images/ball.png": "1affa0beb07d5e448a5b890acf4ffc6b",
"assets/assets/images/blue_1.svg": "b1bb5e0a3d08a39e30db209f91489782",
"assets/assets/images/blue_10.svg": "b46997cb052682c26cba17d1151a6118",
"assets/assets/images/blue_11.svg": "dcc7df17bb38f062162a9cba8f49909a",
"assets/assets/images/blue_2.svg": "5a54bfaf6b58b17925e80b3dc0ff5f10",
"assets/assets/images/blue_3.svg": "4098c1149e973fd3aaedffe98ecbeec8",
"assets/assets/images/blue_4.svg": "f5b80f0b395fdd4fb626ee17a21e8859",
"assets/assets/images/blue_5.svg": "bc08d8c211bb9fd5f9a12f0cadb6b143",
"assets/assets/images/blue_6.svg": "92e8f46fa1bb3d35084fb0ae32cd00f1",
"assets/assets/images/blue_7.svg": "a969201a10b160427530d065e50176dd",
"assets/assets/images/blue_8.svg": "b9962ed3e96c629dc9f048d42082d34b",
"assets/assets/images/blue_9.svg": "3e0d4ee085985fa322e5d266d4205f7b",
"assets/assets/images/chess.png": "15375fc0693a128c15a286ac39236225",
"assets/assets/images/circle.svg": "1009071c2295f1e049f64c9b16700218",
"assets/assets/images/circle_answer.svg": "31a0c7bc5d4851667595bc160abc120d",
"assets/assets/images/corner.png": "708624e4fe82d38e9049decd03271d15",
"assets/assets/images/curved_arrow.svg": "94752aab93e275a8357bbf7749d4eb6e",
"assets/assets/images/curved_line.svg": "d14c9eaf777776bdc1469bbf4a14d408",
"assets/assets/images/dashed_arrow.svg": "ba6282b2fb47f6256f3c45f70f768786",
"assets/assets/images/dashed_curved_arrow.svg": "16119460be1015f5513d1c8aad019315",
"assets/assets/images/facebook.jpg": "f4d35906eacb0a7c1b221f6ef7bfd82b",
"assets/assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/line.svg": "61ee7c5238fe02992a2e580054a97b4f",
"assets/assets/images/link.jpg": "4111b19925331705d0fcad78ec21eae0",
"assets/assets/images/logo.png": "259a39336949757aa89778bd32fd39a1",
"assets/assets/images/logo_old.png": "1d3bd5938a968e24722853562f84836e",
"assets/assets/images/player_1.png": "5a50534d94576081cb2aed90b8a9003e",
"assets/assets/images/player_2.svg": "5a54bfaf6b58b17925e80b3dc0ff5f10",
"assets/assets/images/red_1.svg": "6413d0d068d19923fea4c7ff410cb83c",
"assets/assets/images/red_10.svg": "8a7b5effb0dde73c54a3ef354a0068e3",
"assets/assets/images/red_11.svg": "e5b100a3d34890acd04b2de6d9e14f3a",
"assets/assets/images/red_2.svg": "deb15a70ce08c78a584916a6d3157f94",
"assets/assets/images/red_3.svg": "4659ad82c7e1180a0a38bc3f467233cc",
"assets/assets/images/red_4.svg": "6942d34b37888b429018c05f733671b0",
"assets/assets/images/red_5.svg": "a3fd0993d92cbf15cac7a236f9657744",
"assets/assets/images/red_6.svg": "3285efbca6e09be95986e458382bfafe",
"assets/assets/images/red_7.svg": "e09f9b61bac892078880952c8a5d20ee",
"assets/assets/images/red_8.svg": "8191f1b8660d975668fa39ec704a1b6e",
"assets/assets/images/red_9.svg": "11e49d3280b3800aab0cb9826312c818",
"assets/assets/images/red_line_w_block.svg": "c96cc3e03bc7279df5b4f2012a25cd45",
"assets/assets/images/red_player_2.svg": "deb15a70ce08c78a584916a6d3157f94",
"assets/assets/images/square.svg": "9c43ddd80f9fd86cb34c32e4ff552be8",
"assets/assets/images/square_answer.svg": "c48ba6d2d0fdfe46bcb9bbc17c2bad54",
"assets/assets/images/Stribet%2520linje%2520bue.svg": "437d5ad460a9610b6236520e090f5577",
"assets/assets/images/Stribet%2520linje.svg": "90a2cf7508110665e29d54241c179f5f",
"assets/assets/images/Trekant.svg": "2a3cd4373c1e0ab989aaff851d0eda5b",
"assets/assets/images/x.png": "733379e23ed9fcff00daebbfe6b23c5c",
"assets/FontManifest.json": "2e285abd99db0939b369c347dda18e3a",
"assets/fonts/MaterialIcons-Regular.otf": "bd11f136b7fd6ee72eed243897a9a861",
"assets/NOTICES": "1a849846d571868f2a3f0def30aa7969",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "8181bc3edaddf1c543d782b464e3a89d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "bc7978af82d35e1bf34cb85e8e8477a9",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "3ab15f1b0a213d27e91aa8587acf613b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c24513bd5351a80c46a1726587563d62",
"/": "c24513bd5351a80c46a1726587563d62",
"main.dart.js": "23ba0e9cc400b7160d6bb1b2a9ceb8f2",
"manifest.json": "fcd7546efdd11a02ec2ad5a5fef1a907",
"version.json": "f400ca278f9d98545ee1888efd66b05e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
