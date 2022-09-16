import React, { useState } from 'react';
import MapGL, { NavigationControl, Source, Layer } from 'react-map-gl';

// Initial code for import of map from return function
<MapGL
  initialViewState={{
    /*Centralises the intitial zoom on victoria */
    longitude: 144.964600,
    latitude: -37.020100,
    zoom: 6
  }}
  mapStyle='mapbox://styles/mapbox/light-v10'
  mapboxAccessToken="pk.eyJ1IjoiY21uZzE2IiwiYSI6ImNsODBjZGI2YTA0b2Yzdm8zODBwZnFiZnQifQ.lBTgFG5frrtvTLW093rsgA"
/>;

const sample = [
  [
    {
      step: 0,
      color: "rgba(255, 102, 148, 0)"
    },
    {
      step: 0.33,
      color: "rgba(255, 102, 148, 0.2)"
    },
    {
      step: 0.66,
      color: "#FFF4E0"
    },
    {
      step: 1,
      color: "#FF6694"
    }
  ],
  [
    {
      step: 0,
      color: "hsla(328, 0%, 100%, 0)"
    },
    {
      step: 0.33,
      color: "hsl(275, 18%, 60%)"
    },
    {
      step: 0.66,
      color: "hsl(350, 68%, 52%)"
    },
    {
      step: 1,
      color: "hsl(47, 100%, 87%)"
    }
  ],
  [
    {
      step: 0,
      color: "hsla(328, 0%, 100%, 0)"
    },
    {
      step: 0.33,
      color: "#F3F3FB"
    },
    {
      step: 0.66,
      color: "hsl(200, 74%, 52%)"
    },
    {
      step: 1,
      color: "hsl(173, 81%, 96%)"
    }
  ]
]

export function Heatmap() {
  const [viewport, setViewport] = useState({
    longitude: 144.964600,
    latitude: -37.020100,
    zoom: 5,
  })

  const [intensity, setIntensity] = useState(0.1);
  const [weight, setWeight] = useState(2);
  const [radius, setRadius] = useState(11);

  const [colorState, setColorState] = useState(0);

  const data = {
    type: 'FeatureCollection',
    features: [],
  };

  return (
    <MapGL
      {...viewport}
      onViewportChange={(viewport) => {
        setViewport(viewport)
      }}
      width='100%'
      height='100vh'
      mapStyle='mapbox://styles/mapbox/light-v10'
      mapboxAccessToken="pk.eyJ1IjoiY21uZzE2IiwiYSI6ImNsODBjZGI2YTA0b2Yzdm8zODBwZnFiZnQifQ.lBTgFG5frrtvTLW093rsgA"
    >
      <div className='mapbox__navi'>
        <NavigationControl />
      </div>
      <Source type='geojson' data={data}>
        <Layer {...{
          type: 'heatmap',
          paint: {
            'heatmap-intensity': intensity,
            'heatmap-radius': radius,
            'heatmap-weight': ['interpolate', ['linear'], ['get', 'value'], 0, 0, 6, weight],
            'heatmap-color': [
              "interpolate", ["linear"], ["heatmap-density"],
              sample[colorState][0].step, sample[colorState][0].color,
              sample[colorState][1].step, sample[colorState][1].color,
              sample[colorState][2].step, sample[colorState][2].color,
              sample[colorState][3].step, sample[colorState][3].color,
            ],
            'heatmap-opacity': 1,
          },
        }} />
      </Source>
    </MapGL>

  )
}