import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const AllRoutes = () =>{
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
    )
}

export default AllRoutes