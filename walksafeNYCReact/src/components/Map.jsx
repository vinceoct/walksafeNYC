import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import heatmap from 'heatmap.js'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'

const Map =() => {   
    const mapContainerRef = useRef(null)
    useEffect(() => { 
    const fetchData = async () => {
    try {
    const response = await axios.get('https://walksafenyc-api-production-ba84.up.railway.app/api/posts')
    const data = response.data

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOXTOKEN
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-73.9, 40.7],
        zoom: 9.4,
    })
    data.forEach((entry) => {
        const lon = entry.lon
        const lat = entry.lat
        const type = entry.incident_type
        const time = entry.post_time
        const date = entry.post_date
        const marker = new mapboxgl.Marker({color: '#fdaeec'})
        .setLngLat([lon, lat])
        .setPopup(new mapboxgl.Popup({className: 'popup'}).setHTML(`<h2>Report of ${type} at ${time} on ${date}</h2>`))
        .addTo(map)
        
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