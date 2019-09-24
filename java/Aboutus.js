
                  function initMap() {
                     var uluru = {lat: 37.546195, lng: 127.061626};
                     var map = new google.maps.Map(document.getElementById('map'), {
                       zoom: 16,
                       center: uluru
                     });
                     var marker = new google.maps.Marker({
                       position: uluru,
                       map: map
                     });
                   }
                 