self.addEventListener("install", e => {
e.waitUntil(
	catches.open("static").then(cache =>{
	caches.open.addAll(["./","Win11-preview.css", "Icons/binbows11_dc_server_logo 192x192.png"]);
})
);
});

self.addEventListener("fetch", e =>{
	console.log(`Intercepting fetch request for:${e.request.url}`)
});
