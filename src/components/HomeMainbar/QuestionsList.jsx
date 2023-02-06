import Questions from './Questions'
import './HomeMainbar.css'

const QuestionsList = ({ questionsList }) => {
    console.log(questionsList, '--list')
    return (
        <>
            {
                questionsList.length &&
                questionsList.map((question) => <Questions question={question} key={question._id} />)
            }
        </>
    )
}

export default QuestionsList