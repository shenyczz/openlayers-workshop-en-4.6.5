import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';

//! [import-proj]
import proj from 'ol/proj';

//! [import-vector]
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';

//! [import-style]
import Style from 'ol/style/style';
import IconStyle from 'ol/style/icon';





//! [map-const]
const map = new Map({
  target: 'map-container',
  layers: [
    new TileLayer({
      source: new XYZSource({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

//! [point-layer]
const position = new VectorSource();
const vector = new VectorLayer({
  source: position
});
map.addLayer(vector);

//! [style]
vector.setStyle(new Style({
  image: new IconStyle({
    src: './data/marker.png'
  })
}));

// Zooming to your location
navigator.geolocation.getCurrentPosition(function(pos) {
  const coords = proj.fromLonLat([pos.coords.longitude, pos.coords.latitude]);
  map.getView().animate({ center: coords, zoom: 10 });
  //! [add-point]
  position.addFeature(new Feature(new Point(coords)));
  //! [add-point]
});