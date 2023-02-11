import './AskQuestion.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    var user = useSelector((state) => state.currectUserReducer)

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: user?._doc?.name ?? 'Unknown user', userId: user?._doc?._id }, navigate))
        
    }

    const handleEnter = (event) =>{
        if(event?.key === 'Enter'){
            setQuestionBody(questionBody + '\n')
        }
    }

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask public question</h1>
                <form onSubmit={handleSubmit} >
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you are asking a question to another person</p>
                            <input
                                onChange={(e) => setQuestionTitle(e.target.value)}
                                type="text"
                                id='ask-ques-title'
                                placeholder='e.g is there an R function for finding the index of an element in a vector?'
                            />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone need to answer your question</p>
                            <textarea
                                onChange={(e) => setQuestionBody(e.target.value)}
                                onKeyPress={handleEnter}
                                type="text"
                                id='ask-ques-body'
                            />
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input
                                onChange={(e) => setQuestionTags(e.target.value.split(' '))}
                                type="text"
                                id='ask-ques-tags'
                                placeholder='e.g (xml typescript wordpress'
                            />
                        </label>
                    </div>
                    <button type='submit' className='review-btn'>Review your question</button>
                </form>
            </div>
        </div>
    )
}
export default AskQuestion