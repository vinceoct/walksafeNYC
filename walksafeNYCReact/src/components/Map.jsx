import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import heatmap from 'heatmap.js'
import React, { useEffect, useRef } from 'react'


const Map = () => {
    const mapContainerRef = useRef(null)
    
useEffect(() => { 
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOXTOKEN
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-73.9, 40.7,],
        zoom: 9.4,
    })    
}, [])

    return (
    <div className='mappo'>
        <div className='map' ref={mapContainerRef} />
    </div>
    )
}

export default Map