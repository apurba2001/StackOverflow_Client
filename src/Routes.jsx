import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from "./pages/Questions/Questions"
import AskQuestion from "./components/AskQuestion/AskQuestion"
import DisplayQuestion from "./pages/Questions/DisplayQuestion"
import Tags from "./pages/Tags/Tags"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/askquestion" element={<AskQuestion />} />
            <Route path="/questions/:id" element={<DisplayQuestion />} />
            <Route path="/tags" element={<Tags />} />
        </Routes>
    )
}

export default AllRoutes