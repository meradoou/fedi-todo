!function(){"use strict";const e=["service-worker-index.html",".DS_Store","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"],t=[{pattern:/^\/$/}],n=e.indexOf(".DS_Store");e.splice(n,1);const s=["client/client.78b20315.js","client/index.1f2dfa1a.js","client/client.91340714.js"].concat(e),c=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1587823792686").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587823792686"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&c.has(n.pathname)?e.respondWith(caches.match(e.request)):n.origin===self.origin&&t.find(e=>e.pattern.test(n.pathname))?e.respondWith(caches.match("/service-worker-index.html")):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587823792686").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
