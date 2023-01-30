import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from "./pages/Questions/Questions"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/questions" element={<Questions />} />
        </Routes>
    )
}

export default AllRoutes