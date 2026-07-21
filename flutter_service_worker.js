'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "955db77eb9cd842a44f24be5ecb18485",
"assets/AssetManifest.bin": "480083d6cdaa07f3c7ca23f215ea38e5",
"assets/AssetManifest.bin.json": "a366e421bbcd69dff2333dcd57894870",
"assets/AssetManifest.json": "7d271e105edf60020d2ddde2ebb19a79",
"assets/assets/fonts/Montserrat-Bold.ttf": "c300fff4e4ae0ca994c58ac9f6639b19",
"assets/assets/fonts/Montserrat-Medium.ttf": "9d496514aedf5c9bb3f689de8b094cd8",
"assets/assets/fonts/Montserrat-Regular.ttf": "203d753a80557746c23ce95191fbf013",
"assets/assets/images/ai_chat_bot.png": "7ab532c760b9e803895615019c26abfb",
"assets/assets/images/allpayment.png": "45d46a788870b5c5da020e507fbdf93e",
"assets/assets/images/cloud_connect.gif": "d94bebe504061116a56392d207d1733f",
"assets/assets/images/digitechbanner.png": "328a8419379e390b8ed3135a55087261",
"assets/assets/images/dnb.png": "44e1611c84f64fb7ead9d1a5dbebb271",
"assets/assets/images/domain_available.png": "988d7b128378efcce02922b34adaaf07",
"assets/assets/images/dynadot.png": "9f0f594a66150115f57d6301189761e4",
"assets/assets/images/employee.jpg": "10aef30c412bd7270a46d093e5bd6662",
"assets/assets/images/final_join_us.png": "8b04ba64145a5e7adb8a88b0488ba333",
"assets/assets/images/googleplay.png": "3aa0a97d91608f6706824115cbf17352",
"assets/assets/images/icon.png": "41368934cc94c7feb6c9fe49eabdd081",
"assets/assets/images/inventory.png": "89c839998b5ff9e96546c32190e111ef",
"assets/assets/images/logo.png": "4a79ad20a4da2bed6357cd253bab8014",
"assets/assets/images/msme.png": "d8fd139035dbc4b41f9f534d8e78a702",
"assets/assets/images/no_internet.gif": "9d41086b764951c625935d34d42ce412",
"assets/assets/images/payment_qr.png": "35ce445d93533fd7ca4acc32de029d76",
"assets/assets/images/risived.png": "862519f087b53195a9cbe3b9ef49031c",
"assets/assets/images/startup_india.png": "0313012cf75f25bc11c1e6dc01f508bb",
"assets/assets/images/step3.png": "378378bce0e48cbc2b87fc6958444eae",
"assets/assets/images/update_v.png": "4b27774eda389e22024de9008b0ad820",
"assets/assets/translations/en-US.json": "a0b86a497603d58f01f69067082e321a",
"assets/assets/translations/hi-IN.json": "0201c899a0f631475af1867dfc585d04",
"assets/assets/translations/mr-IN.json": "7cd064d89b3f215b28883c179be63acf",
"assets/FontManifest.json": "de663826f3558b18f290029bfd011289",
"assets/fonts/MaterialIcons-Regular.otf": "a2a7cc22c8200fa2d44769ae693ea7f1",
"assets/NOTICES": "b76f114fa99d59b6c351e8f36092837e",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-144x144.png": "44f6fd0edce906bc644748372b67d606",
"favicon-192x192.png": "8bc390e219de7b1ab9f1ff6186dfd9db",
"favicon-32x32.png": "c82d7ace4f266dbcd1faea43ed78950e",
"favicon-48x48.png": "7416827a06202fc0767731e465f5098e",
"favicon-96x96.png": "bb5ebed9e1e550cc62f3efaddf2ad43c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"index.html": "c421215ff07ada3cbfdfc4d33faef026",
"/": "c421215ff07ada3cbfdfc4d33faef026",
"main.dart.js": "c06c6db1554e120623382eaa1e13582d",
"manifest.json": "9e90d1ce1100870f327b418d4a9cb0f3",
"splash/img/dark-1x.png": "e1680f09e24fe9d251cf2cf14e517938",
"splash/img/dark-2x.png": "4478cef37602f145708eb5a8c55c742c",
"splash/img/dark-3x.png": "46ae72777600258e4cff0ec928da9c82",
"splash/img/dark-4x.png": "0461a3aaafc0ec9660c479dc08787d88",
"splash/img/light-1x.png": "e1680f09e24fe9d251cf2cf14e517938",
"splash/img/light-2x.png": "4478cef37602f145708eb5a8c55c742c",
"splash/img/light-3x.png": "46ae72777600258e4cff0ec928da9c82",
"splash/img/light-4x.png": "0461a3aaafc0ec9660c479dc08787d88",
"version.json": "2549e356144ee9c482bc92799076e590"};
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
