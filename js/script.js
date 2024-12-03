let map;
let marker;
let infoWindow;

function initMap() {
  // Set the initial center of the map
  const center = { lat: 44.429, lng: -110.584 };

  // Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 8,
  });

  // Create the initial marker
  marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "IIT",
  });

  // Create an info window for the marker
  infoWindow = new google.maps.InfoWindow({
    content: "",
  });

  // Add a click event to open the info window when the marker is clicked
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  // Add a click event on the map to create new markers at clicked locations
  map.addListener("click", function (event) {
    const clickedLocation = event.latLng;

    new google.maps.Marker({
      position: clickedLocation,
      map: map,
      title: "New Marker",
    });
  });
}
