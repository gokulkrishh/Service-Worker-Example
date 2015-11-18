
var cacheName = 'initial-cache-v1'; //Cache name

//Files we want to cache
var filesToCache = [
  '/',
  'css/style.css',
  'app.js'
];

self.addEventListener('install', function (event) {

  debugger

  event.waitUntil(
    caches.open(cacheName) //Name of the cache
      .then(function(cache) {

        console.log('cache is opened'); //After cache is opened

        return cache.addAll(filesToCache); //Passing array as arguments
      })
  );

});
