if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./serviceWorker.js', {
      scope: '.'
  }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
   });
}

self.addEventListener('fetch', function(event) { } );