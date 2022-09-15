import * as React from 'react';
import MapGL from 'react-map-gl';

export function Heatmap() {
  return <MapGL
    initialViewState={{
        /*Centralises the intitial zoom on victoria */
      longitude: 144.964600,
      latitude: -37.020100,
      zoom: 6
    }}
    mapStyle='mapbox://styles/mapbox/light-v10'
    mapboxAccessToken="pk.eyJ1IjoiY21uZzE2IiwiYSI6ImNsODBjZGI2YTA0b2Yzdm8zODBwZnFiZnQifQ.lBTgFG5frrtvTLW093rsgA"
  />;
}