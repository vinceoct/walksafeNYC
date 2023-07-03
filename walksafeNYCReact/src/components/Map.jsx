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
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-73.9, 40.7,],
        zoom: 9.4,
    }) 
    // const data = [...]
    //  const heat = heatmap.create({
    //     container: mapContainerRef.current,
    //     radius: 15 
    // })
    // data.forEach((point) => {
    //     heat.addData({
    //         x: point.longitude,
    //         y: point.latitude
    //     })
    // })
  
}, [])

    return (
    <div className='mappo'>
        <div className='map' ref={mapContainerRef} />
    </div>
    )
}

export default Map