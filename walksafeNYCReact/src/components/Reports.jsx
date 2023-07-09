import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import city from '../assets/city.png'

const Reports = () => {
    let navigate = useNavigate()
    const [reports, setReports] = useState([])

    useEffect(() => {
        try {
        const getReports = async () => {
            const response = await axios.get("https://walksafenyc-api-production-ba84.up.railway.app/api/posts")
            setReports(response.data)
        }
        getReports()
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    }, [reports])

    

    const showReport = (id) => {
        navigate(`${id}/`)
    }

    return (
        <div className='allReportsPage'>
        <div className='form-container'>
        <section className="report-grid">
            {
                reports.map((report, id) => (
                    <section key={id} onClick={()=>showReport(id)} className="reports">
                        <p>Date of Incident: {report.post_date}</p>
                        <p>Type of Harassment: {report.incident_type}</p>
                    </section>
                ))
            }
        </section>
        <img src={city} alt="City" />
        </div>
        </div>
    )
}

export default Reports