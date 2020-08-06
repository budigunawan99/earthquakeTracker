import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import TimeEq from "../data/time-eq.js";

const map = () => {
      const mapTitle = document.getElementById('map-title');
      mapTitle.innerHTML = `Earthquake spot from latest month (${TimeEq.getDay().start} - ${TimeEq.getDay().today})`;

      mapboxgl.accessToken = 'pk.eyJ1IjoiYm5hd2FuIiwiYSI6ImNrODY2b3h6NTAyMGwzbm8wNHFkenh4aWsifQ.AX-5rTWJwobWigvjLeQmWA';
      const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k',
            center: [120, -2],
            zoom: 4
      });

      const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            marker: {
                  color: '#d64541'
            },
            mapboxgl: mapboxgl
      });

      map.addControl(geocoder);

      map.on('load', function () {
         
            let today = TimeEq.getDay().today;
            let start = TimeEq.getDay().start;
            map.addSource('earthquakes', {
                  type: 'geojson',
                  data:
                        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${today}`,
                  cluster: true,
                  clusterMaxZoom: 14, 
                  clusterRadius: 50 
            });

            map.addLayer({
                  id: 'clusters',
                  type: 'circle',
                  source: 'earthquakes',
                  filter: ['has', 'point_count'],
                  paint: {
                        'circle-color': [
                              'step',
                              ['get', 'point_count'],
                              '#f1a9a0',
                              100,
                              '#f1828d',
                              750,
                              '#d24d57'
                        ],
                        'circle-radius': [
                              'step',
                              ['get', 'point_count'],
                              20,
                              100,
                              30,
                              750,
                              40
                        ]
                  }
            });

            map.addLayer({
                  id: 'cluster-count',
                  type: 'symbol',
                  source: 'earthquakes',
                  filter: ['has', 'point_count'],
                  layout: {
                        'text-field': '{point_count_abbreviated}',
                        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                        'text-size': 12
                  }
            });

            map.addLayer({
                  id: 'unclustered-point',
                  type: 'circle',
                  source: 'earthquakes',
                  filter: ['!', ['has', 'point_count']],
                  paint: {
                        'circle-color': '#11b4da',
                        'circle-radius': 4,
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#fff'
                  }
            });

            map.on('click', 'clusters', function (e) {
                  let features = map.queryRenderedFeatures(e.point, {
                        layers: ['clusters']
                  });
                  let clusterId = features[0].properties.cluster_id;
                  map.getSource('earthquakes').getClusterExpansionZoom(
                        clusterId,
                        function (err, zoom) {
                              if (err) return;

                              map.easeTo({
                                    center: features[0].geometry.coordinates,
                                    zoom: zoom
                              });
                        }
                  );
            });

            map.on('click', 'unclustered-point', function (e) {
                  let coordinates = e.features[0].geometry.coordinates.slice();
                  let mag = e.features[0].properties.mag;
                  let tsunami;

                  if (e.features[0].properties.tsunami === 1) {
                        tsunami = 'yes';
                  } else {
                        tsunami = 'no';
                  }

                  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                  }

                  new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(
                              `magnitude: ${mag} <br>Was there a tsunami?: ${tsunami}`
                        )
                        .addTo(map);
            });

            map.on('mouseenter', 'clusters', function () {
                  map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'clusters', function () {
                  map.getCanvas().style.cursor = '';
            });
      });
}

export default map;