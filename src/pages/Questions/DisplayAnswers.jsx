import { Link } from "react-router-dom"
import moment from 'moment'

import Avater from "../../components/avater/Avater"
import './Questions.css'

const DisplayAnswers = ({ question, handleShare }) => {

    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div style={{display: "flex"}}>
                                <button type="button" onClick={handleShare}>Share</button>
                                <button type="button" >Delete</button>
                            </div>
                            <div className="answred-page">
                                <div>
                                    <p style={{ margin: "5px 0px" }}>Answered {moment(ans.answredOn).fromNow()}</p>
                                    <Link to={`/user/${question.userId}`} className="user-link" style={{ color: "#0086d8" }} >
                                        <Avater
                                            backgroundColor="green"
                                            borderRadius="3px"
                                            type='nav'
                                            fontSize='20px'
                                        >
                                            {ans?.userAnswred?.charAt(0).toUpperCase()}
                                        </Avater>
                                        <div >
                                            {ans.userAnswred}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswers