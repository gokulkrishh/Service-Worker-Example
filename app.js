'use strict';

(function() {

  //To check service worker is supported or not
  if ('serviceWorker' in navigator) {

    console.log('serviceWorker is supported in your browser.');
    var serviceWorker = navigator.serviceWorker;

    //To register service worker
    serviceWorker.register('serviceWorker.js')
      .then(function (register) {
        console.log('serviceWorker is registered successful.', register); //successfully registered
      })
      .catch(function (error) {
        console.log('Failed to register serviceWorker.', error); //Failed
      });
  }
  else {
    console.log('serviceWorker is not supported in your browser.');
  }

})();
