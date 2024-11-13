// map.js
function initMap() {
  const mapOptions = {
    center: { lat: 41.8781, lng: -87.6298 }, // Coordinates for Chicago, as an example
    zoom: 10,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}