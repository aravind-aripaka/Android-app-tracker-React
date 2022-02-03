import React, { useState,useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import axios from 'axios';

export default function Map() {
//   axios.get("http://localhost:5000/coordinates").then(res => {
//      setViewport({...viewport, longitude: res.data[0].longitude, latitude: 120.4});
//      try{
//      //            setViewport({...viewport,  latitude:lt});
//      }
//      catch(err){}


const [viewport, setViewport] = useState({
   
    longitude: 34.5,
    latitude: 34.5,
    zoom: 8 ,
    height: '60vh',
    width: '100%' , 
    pitch: 50
  });
   
// useEffect( ()=>{
//   getmylocation();
// },[]);
   
  return (
    <ReactMapGL
      mapStyle={'mapbox://styles/mapbox/streets-v11'}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiYWJoYXg5MCIsImEiOiJja3l3bTU4aGwwOXRqMnZscjZqNnZmMnlsIn0.MdyQ7Abnbvc92L3dzPY5lA"
      }
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        <Marker latitude={12.916401350000001} longitude={77.67191770283294} offsetTop={(-viewport.zoom * 5) / 2}>
         <img
            src="https://maps.gstatic.com/intl/en_ALL/mapfiles/dd-start.png"
            width={viewport.zoom * 5}
            height={viewport.zoom * 5}
            />
        </Marker>
    </ReactMapGL>
  );
} 
 