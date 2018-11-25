


 // initialize the map on the "map" div with a given center and zoom
var mymap = L.map('mapid').setView([51.505, -0.09], 13)
//.addLayer(osm);;
// var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
// osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// osm = L.tileLayer(osmUrl, {
//     maxZoom: 18,
//     attribution: osmAttrib
// });

L.tileLayer( 
    'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
       {
        maxZoom:18,
        attribution:'&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap)

// osm.addTo(mymap)

var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("Name:test Volken:8")
var circle = L.circle([51.5, -0.09], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var popup = L.popup();

form = '<form id="beeform"> naam: <input id="name" type="text" name="naam"> <br> volken: <input id="volken" type="text" name="volken"><br>  <input type="submit" value="Submit"><br> </form>' 
function onMapClick(e) {
    // if click on popup dont show
    popup
        .setLatLng(e.latlng)
        .setContent( form  )
        .openOn(mymap);

    $("#beeform").submit(function( event ) {
        // alert( "Handler for .submit() called." );
        // console.log(event);
        event.preventDefault();
        var name = $("#name").val();
        var volken = $("#volken").val();

        var t = "Naam:"+ name+", Volken: " +volken
        L.marker(e.latlng).bindPopup(t).addTo(mymap);
       
        
    })
}

mymap.on('click', onMapClick);
