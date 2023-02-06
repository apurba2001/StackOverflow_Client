import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionsList from './QuestionsList'
import { useSelector } from 'react-redux'
 
const HomeMainbar = () => {

    var questionsList = useSelector(state => state.questionReducer)

    const location = useLocation()
    const navigate = useNavigate()
    const user = 1

    const handleAskQuestion = () => {
        if (user) {
            navigate('/askquestion')
        } else {
            alert('Login or signup to ask a question')
            navigate('/auth')
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ?
                        <h1 className='question-header'>Top Questions</h1> :
                        <h1 className='question-header'>All Questions</h1>
                }
                <button to='askquestion' onClick={handleAskQuestion} className='ask-btn'>Ask Question</button>
            </div>
            <div >
                {
                    !questionsList.data ?
                        <h1>Loding...</h1> :
                        <>
                            <p style={{ marginBottom: "10px", fontWeight: 600 }}>{questionsList.data.length} questions</p>
                            <QuestionsList questionsList={questionsList.data} />
                        </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar