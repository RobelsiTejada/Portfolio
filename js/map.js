const map_wrapper = 'map_container'
const longitude = 42.008299
const latitude = -71.397398
const bubble_content = '<p class=map_contacts>' + '<span>Address : </span>' +
'Rhode Island/Massachusetts Area' + '</p>'

function initialize () {
  const mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(longitude, latitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  }

  const map = new google.maps.Map(document.getElementById(map_wrapper), mapOptions)

  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(longitude, latitude),
    map: map,
    icon: 'img/marker.png'
  })

  const infowindow = new google.maps.InfoWindow({
    content: bubble_content
  })

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker)
  })
}

google.maps.event.addDomListener(window, 'load', initialize)
