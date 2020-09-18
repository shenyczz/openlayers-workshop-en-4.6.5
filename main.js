import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import GeoJSON from 'ol/format/geojson';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';

const map = new Map({
  target: 'map-container',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/countries.json'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});