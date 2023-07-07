import Map from "./Map"
import { Link } from 'react-router-dom'
const Home = () => {
    return  (
        <div className="homePage">
            
            <Map />
            <Link to="/reports" className="reports-link"><button>View all reports</button></Link>
            
        </div>
    )
}

export default Home