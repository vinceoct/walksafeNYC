import mapboxgl from 'mapbox-gl'
import React, { useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
    const mapboxToken = import.meta.env.VITE_MAPBOXTOKEN
    const [viewport, setViewport] = useState({
        width: '30%',
        height: '30%',
        latitude: 40.7,
        longitude: -73.9,  
        zoom: 9,
})
console.log(mapboxToken)
useEffect(() => { 
    const map = new mapboxgl.Map({
        container: 'mapContainer',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [viewport.longitude, viewport.latitude],
        zoom: viewport.zoom,
        accessToken: `${mapboxToken}`


    })
    return () => map.remove()
}, [])




    return (
        <div id='mapContainer'>
            <ReactMapGL />
        </div>
    )
}

export default Map