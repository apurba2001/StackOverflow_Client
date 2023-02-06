import * as api from '../api/index'

export const fetchQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getQuestions()
        dispatch({ type: 'FETCH_QUESTIONS', payload: data })
    } catch (err) {
        console.error(err)
    }
}

export const askQuestion = (questionData, navigate) => async(dispatch) => {
    try{
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data})
        dispatch(fetchQuestions())
        navigate('/')
    }catch(err){
        console.log(err)
    }
}