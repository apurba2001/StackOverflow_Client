import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {

    var questionsList = [{
        id: 1,
        upVotes: 2,
        downVotes: 3,
        noOfAnswers: 2,
        votes: 2,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1',
        answer: [{
            answerBody: 'Answer',
            userAnswred: 'Kumar',
            answredOn: 'Jan 2',
            userId: 2
        }]
    },
    {
        id: 2,
        noOfAnswers: 2,
        votes: 2,
        upVotes: 2,
        downVotes: 3,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1',
        answer: [{
            answerBody: 'Answer',
            userAnswred: 'Kumar',
            answredOn: 'Jan 2',
            userId: 2
        }]
    },
    {
        id: 3,
        noOfAnswers: 2,
        votes: 2,
        upVotes: 2,
        downVotes: 3,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1',
        answer: [{
            answerBody: 'Answer',
            userAnswred: 'Kumar',
            answredOn: 'Jan 2',
            userId: 2
        }]
    }]

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
                    !questionsList ?
                        <h1>Loding...</h1> :
                        <>
                            <p style={{ marginBottom: "10px", fontWeight: 600 }}>{questionsList.length} questions</p>
                            <QuestionsList questionsList={questionsList} />
                        </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar