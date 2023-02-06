import { Link, useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import down from "../../assets/down.png"
import up from "../../assets/up.png"
import './Questions.css'
import Avater from "../../components/avater/Avater"
import DisplayAnswers from "./DisplayAnswers"

const QuestionDetails = () => {

    var questionsList = useSelector(state => state.questionReducer)
    
    const { id } = useParams()
    return (
        <div className="question-details-page">
            {
                !questionsList ?
                    <h1>Loding...</h1> :
                    <>
                        {
                            questionsList.data.filter(question => question._id === id).map((question) => (
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
                                                    <button type="button">Share</button>
                                                    <button type="button">Delete</button>
                                                </div>
                                                <div className="asked-on-container">
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/user/${question.userId}`} className="user-link" style={{ color: "#0086d8", margin: "5px 0px" }} >
                                                            <Avater

                                                                backgroundColor="orange"
                                                                px='8'
                                                                py='5'
                                                                borderRadius="3px"
                                                                textAlign="center"

                                                            >
                                                                {question.userPosted.charAt(0).toUpperCase()}
                                                            </Avater>
                                                            <p style={{margin:"5px"}}>{question.userPosted}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers && (
                                            <section>
                                                <h3 style={{ fontSize: "15px", margin: "10px 0px" }}>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswers key={question._id} question={question} />
                                            </section>
                                        )
                                    }
                                    <section className="post-ans-container">
                                        <h3 style={{ fontSize: "15px", padding: "10px" }}>Your Answer</h3>
                                        <form>
                                            <textarea name="" id="" cols="30" rows="10"></textarea><br />
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