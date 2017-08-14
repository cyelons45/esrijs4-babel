import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

const map = new EsriMap({
	basemap: "streets"
});

const view = new MapView({
	container: "viewDiv",
	map
});