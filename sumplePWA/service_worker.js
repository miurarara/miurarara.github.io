//キャッシュファイルの指定
const CACHE_NAME = 'pwa-sample-caches'
const urlToCache = [
    '/poster-keisuke.github.io/'
]

//インストール処理
self.addEventListener('install',function(event){
    event.waitUntil(
        chaches.open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlToCache)
        })
    )
})

self.addEventListener('fetch',function(event){
    event.respondwith(
        chahes.match(event.request)
        .then(function(response){
            return response ? response : fetch(event.request)
        })
    )
})