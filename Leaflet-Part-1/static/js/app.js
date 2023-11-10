// GET request to the  URL
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(url).then(function (data) {
  createFeatures(data.features);
});
//  map setup
let myMap = L.map('map').setView([37.09, -95.71], 5);
// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create a baseMaps object.
let baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};


function createFeatures(earthquakeData) {
  function onEachFeature(feature, layer) {
    let popupContent = `<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]}</p>`;
    layer.bindPopup(popupContent);
  }

  function markerSize(magnitude) {
    return magnitude * 4;
  }

  function chooseColor(depth) {
    return depth > 90 ? '#d73027' :
           depth > 70 ? '#fc8d59' :
           depth > 50 ? '#fee08b' :
           depth > 30 ? '#d9ef8b' :
           depth > 10 ? '#91cf60' :
                       '#1a9850';
  }

  let earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 1,
        opacity: 0.75,
        fillOpacity: 0.8
      });
    },
    onEachFeature: onEachFeature
  });

  createMap(earthquakes);
}

// ...

function createMap(earthquakes) {
    let overlayMaps = {
      Earthquakes: earthquakes
    };
  
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
  
    let legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function (map) {
      let div = L.DomUtil.create("div", "info legend");
      let depthLevels = [-10, 10, 30, 50, 70, 90];
      let colors = ['#1a9850', '#91cf60', '#d9ef8b', '#fee08b', '#fc8d59', '#d73027'];
  
      div.innerHTML += "<h4>Depth</h4>";
      for (let i = 0; i < depthLevels.length; i++) {
        div.innerHTML +='<i style="background:' + colors[i] + '"></i> ' +   depthLevels[i] + (depthLevels[i + 1] ? "&ndash;" + depthLevels[i + 1] + "<br>" : "+");
      }
      return div;
    };
  
    legend.addTo(myMap);
  }
  
  // ...
  
