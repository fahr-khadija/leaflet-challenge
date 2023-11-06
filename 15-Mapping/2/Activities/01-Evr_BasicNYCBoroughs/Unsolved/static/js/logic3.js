let myMap = L.map("map",{
    center:[40.7128, -74.0059],
    zoom: 11
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Map Style
function chooseColor(borough){
    if (borough == "Brooklyn") return "yellow";
    else if (borough == "Bronx") return "red";
    else if (borough == "Manhattan") return "green";
    else if (borough == "Queens") return "orange";
    // else if (borough == "Staten Island") return "purple";
    else return "black";
};

let link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

d3.json(link).then(function(data){
    L.geoJson(data, {
        style: function(feature) {
            return {
                color: "white",
                fillColor:chooseColor(feature.properties.borough),
                fillOpacity: 0.5,
                weight:1.5,
            };       
        }
    }).addTo(myMap);
});


