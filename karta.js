

function initMap() {
    var location = {lat: 55.704785, lng: 13.193841};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 16, 
        center: location
    });
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    }); 
}
