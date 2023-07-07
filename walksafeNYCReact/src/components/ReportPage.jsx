import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const ReportPage = () => {

    const [report, setReport] = useState('')
    let { id } = useParams()



    useEffect(()=> {
        const getReport = async () => {
            try {
                const response = await axios.get(`https://walksafenyc-api-production.up.railway.app/api/posts/`)
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
            <h4>Incident Report</h4>
            <div className="report-info">
                <p>Date of Incident: {report.post_date}</p>
                <p>Time of Incident: {report.post_time}</p>
                <p>Incident Type: {report.incident_type}</p>
                <p>Comment: {report.comment}</p>
                <p>Location: </p>
            </div>
        </div>
    )
}

export default ReportPage