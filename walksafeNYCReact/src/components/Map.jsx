import mapboxgl from 'mapbox-gl'
import React, { useEffect } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
    const mapboxToken = import.meta.env.VITE_MAPBOXTOKEN
    const [viewport, setViewport] = useState({
        width: '400px',
        height: '100px',
        latitude: 40.7,
        longitude: -73.9,  
        zoom: 9,
})

useEffect(() => { 
    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [viewport.longitude, viewport.latitude],
        zoom: viewport.zoom,
        accessToken: mapboxToken


    })
    return () => map.remove()
}, [])




    return (
        <div>
            <ReactMapGL />
        </div>
    )
}

export default Map