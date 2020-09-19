import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import GeoJSON from 'ol/format/geojson';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';

import extent from 'ol/extent';
import proj from 'ol/proj';

// 限制范围
var sfx_extent = extent.boundingExtent([
  [110, 26],
  [120, 16]
]);


// 中国范围
var china_extent = extent.boundingExtent([
  [109.68310533463954, 25.71875543651788],
  [117.19995117187501, 20.911160631253153]
]);

var china_center = extent.getCenter(china_extent);

const map = new Map({
  target: 'map-container',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        // url: './data/countries.json'
          url: './data/china.json'
      })
    })
  ],
  view: new View({
    // 1 org
    // zoom: 2,
    // center: [0, 0],
    // 

    // 2 限制最大最小放大级别
    // zoom: 2,
    // minZoom: 2,
    // maxZoom: 8,
    // center: [0, 0],

    // 3.1 使用投影 - EPSG:3857(ol的默认投影)
    // zoom: 2,
    // minZoom: 2,
    // maxZoom: 8,
    // projection: "EPSG:3857",
    // center: [0, 0],

    // 3.2 使用投影 - EPSG:4326(WGS84 - 经纬度)
    // zoom: 2,
    // minZoom: 2,
    // maxZoom: 8,
    // projection: "EPSG:4326",
    // center: china_center,

    // 3.3 使用投影转换 - (EPSG:4326) -> (EPSG:4326)
    // zoom: 3,
    // minZoom: 3,
    // maxZoom: 8,
    // projection: "EPSG:4326",
    // center: proj.transform(china_center,'EPSG:4326', 'EPSG:4326'),
    
    // 3.4 使用投影转换 - (EPSG:4326) -> (EPSG:3857)
    zoom: 3,
    minZoom: 3,
    maxZoom: 8,
    projection: "EPSG:3857",
    center: proj.transform(china_center,'EPSG:4326', 'EPSG:3857'),

    // 4.1 限制范围？
    // zoom: 4,
    // minZoom: 2,
    // maxZoom: 8,
    // projection: "EPSG:4326",
    // center: china_center,
    // extent: proj.transformExtent(sfx_extent, 'EPSG:4326', 'EPSG:4326'),
  })
});