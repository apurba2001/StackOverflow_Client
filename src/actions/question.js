import * as api from '../api/index'

export const fetchQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getQuestions()
        dispatch({ type: 'FETCH_QUESTIONS', payload: data })
    } catch (err) {
        console.error(err)
    }
}

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data })
        dispatch(fetchQuestions())
        navigate('/')
    } catch (err) {
        console.log(err)
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, answerBody, userAnswred, userId } = answerData
        const { data } = await api.postAnswer(id, answerBody, userAnswred, userId)
        dispatch({ type: 'POST_ANSWER', payload: data })
        dispatch(fetchQuestions())
    } catch (err) {
        console.log(err)
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const { data } = await api.deleteQuestion(id)
        dispatch(fetchQuestions())
        navigate('/')
    } catch (err) {
        console.log(err)
    }
}

export const deleteAnswer = (id, answerId) => async (dispatch) => {
    try {
        const { data } = await api.deleteAnswer(id, answerId)
        dispatch(fetchQuestions())
    } catch (err) {
        console.log(err)
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId)
        dispatch(fetchQuestions())
    } catch (err) {
        console.log(err)
    }
}