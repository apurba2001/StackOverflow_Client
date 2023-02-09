import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import moment from 'moment'
import copy from 'copy-to-clipboard'

import down from "../../assets/down.png"
import up from "../../assets/up.png"
import './Questions.css'
import Avater from "../../components/avater/Avater"
import DisplayAnswers from "./DisplayAnswers"
import { postAnswer } from "../../actions/question"


const QuestionDetails = () => {

    var questionsList = useSelector(state => state.questionReducer)

    const { id } = useParams()
    const navigate = useNavigate()
    const user = useSelector((state) => state.currectUserReducer)
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch()

    const handlePostAns = (e, answerLen) => {
        console.log('user->', user)
        e.preventDefault()
        if (!user) {
            alert('Login or signup to answer a question')
            navigate('/auth')
        } else {
            if (!answer) {
                alert('Enter an answer before submitting')
            } else {
                dispatch(postAnswer({ id, answerBody: answer, userAnswred: user?._doc?.name, userId: user?._doc?._id }))
            }
        }
    }
    const location = useLocation()
    const url = 'http://localhost:3000'
    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied url: ' + url + location.pathname)
    }

    return (
        <div className="question-details-page">
            {
                !questionsList ?
                    <h1>Loding...</h1> :
                    <>
                        {
                            questionsList?.data?.filter(question => question._id === id).map((question) => (
                                <div key={question._id}>
                                    <section className="question-details-container">
                                        <h1 style={{ fontSize: '21px', paddingBottom: "10px" }}>{question.questionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={up} alt="" width='18' />
                                                <p >{question.upVote.length - question.downVote.length}</p>
                                                <img src={down} alt="" width='18' />
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className="question-body">{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <button type="button" onClick={handleShare}>Share</button>
                                                    <button type="button">Delete</button>
                                                </div>
                                                <div className="asked-on-container">
                                                    <div>
                                                        <p>Asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/user/${question.userId}`} className="user-link" style={{ color: "#0086d8", margin: "5px 0px" }} >
                                                            <Avater

                                                                backgroundColor="orange"
                                                                borderRadius="3px"
                                                                type='nav'
                                                                fontSize='20px'

                                                            >
                                                                {question.userPosted.charAt(0).toUpperCase()}
                                                            </Avater>
                                                            <p style={{ margin: "5px" }}>{question.userPosted}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.answer.length && (
                                            <section>
                                                <h3 style={{ fontSize: "15px", margin: "10px 0px" }}>{question.answer.length} Answer{question.answer.length === 1 ? '' : 's'}</h3>
                                                <DisplayAnswers key={question._id} question={question} handleShare={handleShare} />
                                            </section>
                                        )
                                    }
                                    <section className="post-ans-container">
                                        <h3 style={{ fontSize: "15px", padding: "10px" }}>Your Answer</h3>
                                        <form onSubmit={(e) => handlePostAns(e)}>
                                            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                                            <input type="submit" className="post-ans-btn" value='Post Your Answer' />
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/tags' key={tag} className="ans-tags">
                                                        {tag}
                                                    </Link>
                                                ))
                                            }or
                                            <Link to='/askquestion' style={{ textDecoration: "none", color: "#009dff", margin: "3px" }}>
                                                Ask your own question
                                            </Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails