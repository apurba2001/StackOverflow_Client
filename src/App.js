import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './Routes'

export default function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  )
}