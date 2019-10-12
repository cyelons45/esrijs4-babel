import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';

setHeader ('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');

var state;
const map = new EsriMap ({
  basemap: 'streets',
});

const view = new MapView ({
  container: 'viewDiv',
  map,
});

state = [];
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 23, 4, 4];

data.forEach (function (el) {
  state.push (el * 5);
});
console.log ();
