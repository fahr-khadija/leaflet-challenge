
let myMap = L.map("map", {
    center: [43.65, 79.38],
    zoom: 13   // 43.6532° N, 79.3832° W
});

// Add a layer to my map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)