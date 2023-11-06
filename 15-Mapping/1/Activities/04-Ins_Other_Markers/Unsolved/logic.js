// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
let myMap = L.map("map").setView([45.52, -122.67], 13);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Create a new marker.
L.marker([45.52, -122.67]).addTo(myMap);

// Circle
L.circle([45.52, -122.67], {
    radius: 500,
    color: "red",
    fillColor: "green",
    fillOpacity: 1
}).addTo(myMap);


// Polyline
let line = [
  [45.51, -122.68],
  [45.50, -122.60],
  [45.48, -122.70],
  [45.54, -122.75]
];

L.polyline(line, {
    color: "red"
}).addTo(myMap);

// Polygon

L.polygon([[45.54, -122.68],
    [45.55, -122.68],
    [45.55, -122.66]],
    {
        color: "yellow",
        fillColor: "yellow",
        fillOpacity: 0.75
    }).addTo(myMap);

L.rectangle([
    [45.55, -122.64],
    [45.54, -122.61]],
    {
        color: "black",
        weight: 3,
        stroke: true
    }).addTo(myMap);