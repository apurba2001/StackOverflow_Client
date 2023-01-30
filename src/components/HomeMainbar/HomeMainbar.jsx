import './HomeMainbar.css'
import { Link, useLocation } from 'react-router-dom'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {
    var questionsList = [{
        id: 1,
        noOfAnswers: 2,
        votes: 2 ,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1'
    },
    {
        id: 2,
        noOfAnswers: 2,
        votes: 2,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1'
    },
    {
        id: 3,
        noOfAnswers: 2,
        votes: 2,
        questionTitle: "What is a finction?",
        questionBody: "It ment to be",
        questionTags: ['javs', 'nodejs', 'react.js', 'mongodb', 'express.js'],
        userPosted: 'Mono',
        askedOn: 'Jan 1'
    }]
    const location = useLocation()
    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ?
                        <h1 className='question-header'>Top Questions</h1> :
                        <h1 className='question-header'>All Questions</h1>
                }
                <Link to='askquestion' className='ask-btn'>Ask Question</Link>
            </div>
            <div >
                {
                    !questionsList ?
                        <h1>Loding...</h1> :
                        <>
                            <p style={{marginBottom: "10px", fontWeight: 600}}>{questionsList.length} questions</p>
                            <QuestionsList questionsList={questionsList} />
                        </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar