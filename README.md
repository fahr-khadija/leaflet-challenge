# leaflet-challenge

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. 
Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# Instructions
The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization

Part 2: Gather and Plot More Data (Optional with no extra points earning)

# Part 1: Create the Earthquake Visualization

    ## 1 - Get the dataset

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 

   ### Visit the USGS GeoJSON FeedLinks https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

   ### Choose a dataset to visualize.
When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. 
Use the URL of this JSON to pull in the data for the visualization.

   ## Import and visualize the data 

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
the data markers should reflect the magnitude of the earthquake by their size and depth of the earthquake by color.
(The depth is found as the third coordinate for each earthquake)
Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
Include popups that provide additional information about the earthquake when its associated marker is clicked.
Create a legend that will provide context for your map data.
## MAP     
### TileLayer loads without error

### Connects to geojson API using D3 without error 

### Markers with size corresponding to earthquake magnitude 

### A legend showing the depth and their corresponding color 

## Data Points 
### Data points scale with magnitude level

### Data point's colors change with depth level

### Each point has a tooltip Magnitude, location, and depth 

### All data points load in the correct locations

### Visualization 
