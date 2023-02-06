import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './Routes'
import { useEffect } from 'react';
import { fetchQuestions } from './actions/question';
import { useDispatch } from 'react-redux';

export default function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchQuestions())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  )
}