let lat = -37.8575;
let lng = 175.679722;
let zoom = 13

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

L.control.scale({
    imperial: false,
    maxWidth: 200
}).addTo(map);