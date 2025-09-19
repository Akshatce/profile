const CACHE_NAME = 'akshat-portfolio-v1';
const STATIC_ASSETS = [
  '/',
  '/profile.jpg',
  '/AkshatDesai_Resume.pdf',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap',
  'https://unpkg.com/aos@2.3.1/dist/aos.css'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching Files');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => console.log('Service Worker: Cache Error', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetch', event.request.url);
  
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If online, cache the response and return it
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If offline, serve from cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            // If not in cache and offline, return a fallback
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background Sync', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle background form submission when connection is restored
      console.log('Service Worker: Contact form sync')
    );
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push Received', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/profile.jpg',
    badge: '/profile.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Akshat Desai Portfolio', options)
  );
});
