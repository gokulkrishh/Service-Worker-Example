
importScripts('serviceworker-cache-polyfill.js');

var cacheName = 'initial-cache-v1'; //Cache name

//Files we want to cache
var filesToCache = [
  '/',
  'css/style.css',
  'app.js'
];

// To cache the files
self.addEventListener('install', function (event) {

  event.waitUntil(
    caches.open(cacheName) //Name of the cache
      .then(function(cache) {

        console.log('cache is opened'); //After cache is opened

        return cache.addAll(filesToCache); //Passing array as arguments
      })
  );
});

// To return the cached files
self.addEventListener('fetch', function (event) {

  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        console.log('response --->', response);

        // If response present, return it
        if (response) {
          return response;
        }

        // No response, return the fetch event again
        return fetch(event.request);

      })
  )
});
