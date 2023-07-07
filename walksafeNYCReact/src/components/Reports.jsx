import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Reports = () => {
    let navigate = useNavigate()
    const [reports, setReports] = useState([])

    useEffect(() => {
        try {
        const getReports = async () => {
            const response = await axios.get("https://walksafenyc-api-production.up.railway.app/api/posts")
            setReports(response.data)
        }
        getReports()
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [reports])

    

    const showReport = (id) => {
        navigate(`${id}/`)
    }

    return (
        <section className="report-grid">
            {
                reports.map((report, id) => (
                    <section key={id} onClick={()=>showReport(id)} className="reports">
                        <p>Date of Incident: {report.post_date}</p>
                        <p>Time of Incident: {report.post_time}</p>
                        <p>Type of harassment: {report.incident_type}</p>
                        <p>Description: {report.comment}</p>
                    </section>
                ))
            }
        </section>
    )
}

export default Reports