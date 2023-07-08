import React, { useState, useContext } from 'react'
import city from '../assets/city.png'
import { AuthContext } from '../context/AuthProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Login from './Login'
const ReportForm = () => {

    const { loggedIn, user } = useContext(AuthContext)

    console.log(user)

    if (!loggedIn || !user) {
        return(
        <div>
        <h1 className='pleaselogin'>please login</h1>
        <Login/>
        </div>)
    }

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [incidentType, setIncidentType] = useState('')
    const [comment, setComment] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [address, setAddress] = useState('')
    const [LocationLoading, setLocationLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(true)
        if (address != '') {
        geocode(address)
        } else if (latitude != '' && address === ''){
        newReport(latitude, longitude)
        }
    }

    // pulls location data from user device when use current location button is clicked. 
    const handleGeolocation = (e) => {
        e.preventDefault()
        if (navigator.geolocation) {
            setLocationLoading(true)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let latitude = position.coords.latitude
                    let longitude = position.coords.longitude
                    setLongitude(longitude)
                    setLatitude(latitude)
                    setLocationLoading(false)
                },
                (error) => {
                    console.log('error', error)
                    setLocationLoading(false)
                })
                
        } else {
            console.log('geolocation is not supported by this browse.')
        }
    }

        const geocode = async (address) => {
        try {
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${import.meta.env.VITE_MAPBOXTOKEN}`)
                const location = response.data.features[0].geometry.coordinates
                console.log('latiude', location[1])
                console.log('longitude', location[0])
                setLongitude(location[0])
                setLatitude(location[1])
                newReport(location[1], location[0])
            } catch (error) {
                console.log(error)
            }
        }

        const newReport = async (latitude, longitude) => {
            const response = await axios.post(`https://walksafenyc-api-production.up.railway.app/api/posts`, {
            lat: latitude,
            lon: longitude,
            post_date: date,
            post_time: time,
            user_account: user._id,
            incident_type: incidentType,
            comment: comment   
            })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        }

    return (
        <div className="report-form-page">
              {success ? (
                <section>
                    <h1>Report successfully created.</h1>
                    <p>
                    <Link className="home" to="/"><button id="home" className="submit-button">Go home.</button></Link> 
                    </p>
                </section>
            ) : (
            <div className="form-container">
            <form className="report-form" onSubmit={handleSubmit}>
                <h4>Report an incident of street harrassment:</h4>
                <div className="question">
                    <label htmlFor="date">Date of Incident: </label>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} id="date"></input>
                </div>
                <div className="question">
                    <label htmlFor="time">Time of Incident: </label>
                    <select onChange={(e)=>setTime(e.target.value)} id="time">
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="12:15 AM">12:15 AM</option>
                        <option value="12:30 AM">12:30 AM</option>
                        <option value="12:45 AM">12:45 AM</option>
                        <option value="1:00 AM">1:00 AM</option>
                        <option value="1:15 AM">1:15 AM</option>
                        <option value="1:30 AM">1:30 AM</option>
                        <option value="1:45 AM">1:45 AM</option>
                        <option value="2:00 AM">2:00 AM</option>
                        <option value="2:15 AM">2:15 AM</option>
                        <option value="2:30 AM">2:30 AM</option>
                        <option value="2:45 AM">2:45 AM</option>
                        <option value="3:00 AM">3:00 AM</option>
                        <option value="3:15 AM">3:15 AM</option>
                        <option value="3:30 AM">3:30 AM</option>
                        <option value="3:45 AM">3:45 AM</option>
                        <option value="4:00 AM">4:00 AM</option>
                        <option value="4:15 AM">4:15 AM</option>
                        <option value="4:30 AM">4:30 AM</option>
                        <option value="4:45 AM">4:45 AM</option>
                        <option value="5:00 AM">5:00 AM</option>
                        <option value="5:15 AM">5:15 AM</option>
                        <option value="5:30 AM">5:30 AM</option>
                        <option value="5:45 AM">5:45 AM</option>
                        <option value="6:00 AM">6:00 AM</option>
                        <option value="6:15 AM">6:15 AM</option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="6:45 AM">6:45 AM</option>
                        <option value="7:00 AM">7:00 AM</option>
                        <option value="7:15 AM">7:15 AM</option>
                        <option value="7:30 AM">7:30 AM</option>
                        <option value="7:45 AM">7:45 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="8:15 AM">8:15 AM</option>
                        <option value="8:30 AM">8:30 AM</option>
                        <option value="8:45 AM">8:45 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="9:15 AM">9:15 AM</option>
                        <option value="9:30 AM">9:30 AM</option>
                        <option value="9:45 AM">9:45 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:15 AM">10:15 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="10:45 AM">10:45 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:15 AM">11:15 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="11:45 AM">11:45 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:15 PM">12:15 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="12:45 PM">12:45 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:15 PM">1:15 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="1:45 PM">1:45 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="2:15 PM">2:15 PM</option>
                        <option value="2:30 PM">2:30 PM</option>
                        <option value="2:45 PM">2:45 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:15 PM">3:15 PM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="3:45 PM">3:45 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="4:15 PM">4:15 PM</option>
                        <option value="4:30 PM">4:30 PM</option>
                        <option value="4:45 PM">4:45 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:15 PM">5:15 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="5:45 PM">5:45 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:15 PM">6:15 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="6:45 PM">6:45 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:15 PM">7:15 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="7:45 PM">7:45 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:15 PM">8:15 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="8:45 PM">8:45 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="9:15 PM">9:15 PM</option>
                        <option value="9:30 PM">9:30 PM</option>
                        <option value="9:45 PM">9:45 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="10:15 PM">10:15 PM</option>
                        <option value="10:30 PM">10:30 PM</option>
                        <option value="10:45 PM">10:45 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                        <option value="11:15 PM">11:15 PM</option>
                        <option value="11:30 PM">11:30 PM</option>
                        <option value="11:45 PM">11:45 PM</option>
                    </select>
                </div>
                <div className="question">
                    <label htmlFor="incidentType">Incident Type: </label>
                    <select  id="incidentType" onChange={(e)=>setIncidentType(e.target.value)}>
                        <option value="Verbal Harrassment">Verbal Harrassment</option>
                        <option value="Physical Harrassment">Physical Harrassment</option>
                        <option value="Sexual Harrassment">Sexual Harrassment</option>
                    </select>
                </div>
                <div className="question">
                    <label htmlFor="comment">Comment: </label>
                    <textarea  id="comment" onChange={(e)=>setComment(e.target.value)}></textarea>
                </div>
                <div className="question">
                    <label htmlFor="currentLocation">Location: </label>
                    <div className='locationdiv'>
                    {LocationLoading ? ( <button id="loadinglocation">Getting Location</button>
                    ) : (
                        latitude !== '' ? (
                            <button id="havelocation">Received</button>
                        ) : (
                     <button id="currentLocation" type='button' onClick={handleGeolocation}>Use Location</button>))} 
                     <p id='or'>OR</p>
                    <textarea id='address' onChange={(e)=>setAddress(e.target.value)} placeholder='Enter address'></textarea>
                </div>
                </div>
                 <button className="submit-button" type="submit">Submit Report</button>
                
            </form>
            <img src={city}/>
           </div> 
        )}
        </div>
        
    )
}

export default ReportForm

