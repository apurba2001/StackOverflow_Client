import './AskQuestion.css'

const AskQuestion = () => {

    return (
        <div className='ask-question'>
            <div className="ask-ques-container">
                <h1>Ask public question</h1>
                <form >
                    <div className="ask-form-container">
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you are asking a question to another person</p>
                            <input
                                type="text"
                                id='ask-ques-title'
                                placeholder='e.g is there an R function for finding the index of an element in a vector?'
                            />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone need to answer your question</p>
                            <textarea
                                type="text"
                                id='ask-ques-body'
                            />
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input
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