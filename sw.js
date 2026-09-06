const NAMA_CACHE = "laluan-kecemasan-sistem-v11-2";
const FAIL_UNTUK_CACHE = [
  "./index.html", "./blok.html", "./peta.html", "./senarai.html", "./panduan.html",
  "./tentang.html", "./tetapan.html", "./editor.html", "./manifest.json", "./floors/floors-index.json",
  "./simbol/pemadam.png", "./simbol/berkumpul.png", "./simbol/tangga.svg",
  "./floors/aras1.png", "./floors/aras1_laluan_gabungan.png", "./floors/aras1_laluan.json", "./floors/aras1_pemadam.json",
  "./floors/aras2.png", "./floors/aras2_laluan.json", "./floors/aras2_pemadam.json",
  "./floors/aras3.png", "./floors/aras3_laluan.json", "./floors/aras3_pemadam.json",
  "./floors/k1.png", "./floors/k1_laluan.json", "./floors/k1_pemadam.json",
  "./floors/k2.png", "./floors/k2_laluan.json", "./floors/k2_pemadam.json",
  "./floors/k3.png", "./floors/k3_laluan.json", "./floors/k3_pemadam.json",
  "./floors/k4.png", "./floors/k4_laluan.json", "./floors/k4_pemadam.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(NAMA_CACHE).then((cache) => cache.addAll(FAIL_UNTUK_CACHE)));
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((n) => Promise.all(n.filter(x => x !== NAMA_CACHE).map(x => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
