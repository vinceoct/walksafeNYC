import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useEffect, useRef } from 'react'


const Map = () => {
    const mapContainerRef = useRef(null)
    
useEffect(() => { 
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOXTOKEN
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-73.9, 40.7,],
        zoom: 9,
        
    })
    
    // const resizeMap = () => {
    //     map.resize()
    // }

    // window.addEventListener('resize', resizeMap)

    // return () => {
    //  window.removeEventListener('resize', resizeMap)
    //  map.remove()
    // }
}, [])

    return (
    <div className='mappo'>
        <div className='map' ref={mapContainerRef} id='mapContainer'/>
    </div>
    )
}

export default Map