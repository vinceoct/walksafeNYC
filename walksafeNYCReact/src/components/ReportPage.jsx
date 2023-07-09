import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import city from '../assets/city.png'

const ReportPage = () => {

    const [report, setReport] = useState('')
    let { id } = useParams()



    useEffect(()=> {
        const getReport = async () => {
            try {
                const response = await axios.get(`https://walksafenyc-api-production-ba84.up.railway.app/api/posts/`)
                const data = response.data[id]
                console.log(data)
                setReport(data)
            } catch (error) {
                console.error('Error fetching report', error)
            }
        }
        getReport()
    }, [id])

    return (
        <div className="reportPage">
            <div className='form-container'>
            <div className='reportcont'>
            <h4>Incident Report</h4>
                <div className='reportdetails'>
                    <p>Date of Incident:</p> <p>{report.post_date}</p>
                </div>
                <div className='reportdetails'>
                    <p>Time of Incident:</p> <p>{report.post_time}</p>
                </div>
                <div className='reportdetails'>
                    <p>Incident Type:</p> <p>{report.incident_type}</p>
                </div>
                <div className='reportdetails'>
                    <p>Comment:</p> <p>{report.comment}</p>
                </div>
                <div className='reportdetails'>
                    <p>Location:</p> <p>Latitude: {report.lat}, Longitude: {report.lon} </p>
                </div>
            </div>
            <img src={city} alt="City" />
            </div>
        </div>
    )
}

export default ReportPage