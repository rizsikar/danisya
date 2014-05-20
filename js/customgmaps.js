var map;
      var centerPos = new google.maps.LatLng(-6.302812,106.891302);
      var zoomLevel = 12;
      function initialize() {
        
        var styles = [
            {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                { "color": "#e2e2e2" }
              ]
            },{
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                { "color": "#bdbdbd" }
              ]
            },{
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                { "color": "#666666" }
              ]
            },{
              "featureType": "poi.park",
              "stylers": [
                { "color": "#c4c4c4" }
              ]
            },{
              "featureType": "water",
              "stylers": [
                { "color": "#43698c" }
              ]
            }
          ];

        var mapOptions = {
          center: centerPos,
          zoom: 16,
          scrollwheel: false

        };
        map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );



        var locations = [
          ['First Shoppe', -6.302812,106.891302]
        ];
         
        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            title: locations[i][0],
            map: map
          });
        }


        var styledMap = new google.maps.StyledMapType( styles, {name: "Styled Map"} );
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
      }

      google.maps.event.addDomListener(window, 'load', initialize);