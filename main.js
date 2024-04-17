let lat = -37.8575;
let lng = 175.679722;
let zoom = 2
let lat2 = 9.89
let lng2 = 10.89

let map = L.map('map', {
    center: [lat2, lng2],
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

let jsondata= {
        "type": "FeatureCollection",
        "features": [
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -19.511292,63.5321038 ]
         },
         "properties": {
         "nr":1,
         "user":"danielwebmap",
         "name":"Skógafoss Wasserfall ",
         "wikipedia":"https://de.wikipedia.org/wiki/Sk%C3%B3gafoss"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 175.679722,-37.8575 ]
         },
         "properties": {
         "nr":2,
         "user":"madeleinehll",
         "name":"Herr der Ringe Filmset",
         "wikipedia":"https://en.wikipedia.org/wiki/Hobbiton_Movie_Set"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.799173,45.873466 ]
         },
         "properties": {
         "nr":3,
         "user":"laurauniibk",
         "name":"Monte Grappa",
         "wikipedia":"https://de.wikipedia.org/wiki/Monte_Grappa "
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -124.636604,47.908683 ]
         },
         "properties": {
         "nr":4,
         "user":"webmapping",
         "name":"La Push",
         "wikipedia":"https://de.wikipedia.org/wiki/La_Push_(Washington)"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.616667,52.133333 ]
         },
         "properties": {
         "nr":5,
         "user":"ernstanton",
         "name":"Magdeburg",
         "wikipedia":"https://de.wikipedia.org/wiki/Magdeburg"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [  13.433611,47.776389 ]
         },
         "properties": {
         "nr":6,
         "user":"annagruber263",
         "name":"Salzkammergut",
         "wikipedia":"https://de.wikipedia.org/wiki/Salzkammergut"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.574444,48.139722 ]
         },
         "properties": {
         "nr":7,
         "user":"kreiselinho",
         "name":"München",
         "wikipedia":"https://de.wikipedia.org/wiki/M%C3%BCnchen"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.42166667,47.42694444 ]
         },
         "properties": {
         "nr":8,
         "user":"amjusi",
         "name":"Karwendel",
         "wikipedia":"https://www.wikiwand.com/de/Karwendel"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -16.64235,28.27273 ]
         },
         "properties": {
         "nr":9,
         "user":"marcfk",
         "name":"Nationalpark Teide",
         "wikipedia":"https://de.wikipedia.org/wiki/Teide"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.250278,46.816944 ]
         },
         "properties": {
         "nr":10,
         "user":"sebspr",
         "name":"Das Passeiertal",
         "wikipedia":"https://de.wikipedia.org/wiki/Passeier"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 77.516667,34.15 ]
         },
         "properties": {
         "nr":11,
         "user":"marcelboehm",
         "name":" Ladakh",
         "wikipedia":"https://de.wikipedia.org/wiki/Ladakh"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 7.86675,45.9369 ]
         },
         "properties": {
         "nr":12,
         "user":"sophiest01",
         "name":"Dufourspitze",
         "wikipedia":"https://de.wikipedia.org/wiki/Dufourspitze"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 11.286111,47.32 ]
         },
         "properties": {
         "nr":13,
         "user":"johanna135",
         "name":"Gipfelstürmernadel",
         "wikipedia":"https://de.wikipedia.org/wiki/Gipfelstürmernadel"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 50,8.27 ]
         },
         "properties": {
         "nr":14,
         "user":"czackl",
         "name":"Mainz",
         "wikipedia":"https://de.wikipedia.org/wiki/Mainz"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ -19.063889,63.988611 ]
         },
         "properties": {
         "nr":15,
         "user":"meritkoch",
         "name":"Landmannalaugar",
         "wikipedia":"https://de.wikipedia.org/wiki/Landmannalaugar"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 10.979589,47.416604 ]
         },
         "properties": {
         "nr":16,
         "user":"niklasschw",
         "name":"Schneefernerhaus",
         "wikipedia":"https://de.wikipedia.org/wiki/Schneefernerhaus"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 12.970926,67.8802837 ]
         },
         "properties": {
         "nr":17,
         "user":"bendai98",
         "name":"Lofoten",
         "wikipedia":"https://de.wikipedia.org/wiki/Lofoten"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 12.566667,43.35 ]
         },
         "properties": {
         "nr":18,
         "user":"yle5",
         "name":"Gubbio",
         "wikipedia":"https://de.wikipedia.org/wiki/Gubbio"
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 6.363708 ,49.469972 ]
         },
         "properties": {
         "nr":19,
         "user":"laurent2997",
         "name":"Schengen",
         "wikipedia":"https://de.wikipedia.org/wiki/Schengen "
         }
       },
       {
         "type": "Feature",
         "geometry": {
            "type": "Point",
            "coordinates":  [ 10.89167,49.89167 ]
         },
         "properties": {
         "nr":20,
         "user":"lealucia",
         "name":"Bamberg",
         "wikipedia":"https://de.wikipedia.org/wiki/Bamberg"
         }
       }
     ]
     }
L.geoJSON(jsondata, {}).bindPopup(function (layer) {
    console.log(layer.feature.properties)
    return `
    <strong>${layer.feature.properties.name}</strong>
    <ul>
       <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(2)}</li> 
       <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(2)}</li>
       <li><a href="https://${layer.feature.properties.user}.github.io/nz">Etappenseite</a></li>
       <li><a href= "${layer.feature.properties.wikipedia}">Wikipedia</a></li>
    </ul>
`;
}).addTo(map);