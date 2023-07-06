import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import heatmap from 'heatmap.js'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'

// make an axios call that maps all the lat,lon from posts 
// push the numbers 
const Map =() => {   
    const mapContainerRef = useRef(null)
    useEffect(() => { 
    const fetchData = async () => {
    try {
    const response = await axios.get('https://walksafenyc-api-production.up.railway.app/api/posts')
    const data = response.data

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOXTOKEN
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-73.9, 40.7],
        zoom: 9.4,
    })
    data.forEach((entry) => {
        const lon = entry.lon
        const lat = entry.lat
        const marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map)
    })
  
  } catch (error) {
    console.error('error:', error)
  }
}  
  fetchData()
}, [])

    return (
    <div className='mappo'>
        <div className='map' ref={mapContainerRef} />
    </div>
    )
}

export default Map