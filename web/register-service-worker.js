/* eslint-env browser */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
}

/* if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('SW_PUBLIC_URL/expo-service-worker.js', {
        scope: 'SW_PUBLIC_SCOPE'
      })
      .then(info => {
        info.onupdatefound = () => {
          const installingWorker = info.installing
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged
                console.log('New content is available; Refreshing user app...')
                window.location.reload()
              } else {
                // At this point, everything has been precached
                console.log('Content is cached for offline use.')
              }
            }
          }
        }
      })
      .catch(function (error) {
        console.info('Failed to register service-worker', error)
      })
  })
}
 */
