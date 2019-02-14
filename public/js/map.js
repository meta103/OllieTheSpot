mapboxgl.accessToken =<%-`"${token}"`%>;
var map = new mapboxgl.Map({
container: 'show-map', // container id
style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
 // starting position [lng, lat]
zoom: 15 // starting zoom
});
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = [position.coord.longitude, position.coords.latitude];
        map.setCenter(pos);
      });
    }