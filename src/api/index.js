import axios from 'axios'

const SERVER = 'https://stack-overflow-clone-7mrq.onrender.com' 
// const LOCAL = 'http://localhost:5000'
const API = axios.create({ baseURL: SERVER })

export const login = (authData) => API.post('/user/login', authData)
export const signup = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) => API.post('/questions/ask', questionData)
export const getQuestions = (questionsData) => API.get('/questions/get', questionsData)
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId })

export const postAnswer = (id, answerBody, userAnswred, userId) => API.patch(`/answer/post/${id}`, { answerBody, userAnswred, userId })
export const deleteAnswer = (id, answerId) => API.patch(`/answer/delete/${id}`, { answerId })