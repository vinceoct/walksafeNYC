import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const Main = () => {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Main