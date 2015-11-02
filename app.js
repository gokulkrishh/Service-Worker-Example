'use strict';

var myFunz = (function() {

  var init = function() {

    // Check service is supported or not
    if ('serviceWorker' in navigator) {

      console.log('serviceWorker is supported in your browser');
      var serviceWorker = navigator.serviceWorker;

      //To register service worker
      serviceWorker.register('./serviceWorker.js')
        .then(function (register) {
          console.log('Registration successful', register); //successfully registered
        })
        .catch(function (error) {
          console.log('Failed to register', error); //Failed
        });
    }
  };

  return {
    init: init
  };

})();


myFunz.init();
