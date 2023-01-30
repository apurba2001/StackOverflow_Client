import { Link } from 'react-router-dom'
import './HomeMainbar.css'

const Questions = ({ question }) => {

    return (
        <div className="display-question-container">
            <div className="display-votes-ans">
                <p>{question.votes}</p>
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
            </div>
            <div className="display-question-details">
                <Link to={`questions/${question.id}`} className='question-title-link'>
                    {question.questionTitle}
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <div className="display-time">
                        asked {question.askedOn} {question.userPosted}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions