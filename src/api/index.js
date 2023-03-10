import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    const profile = JSON.parse(localStorage.getItem('Profile'));
    if (profile && profile.token) {
        if (!req.headers.authorization) {
            req.headers.authorization = `Bearer ${profile.token}`;
        }
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});


export const login = (authData) => API.post('/user/login', authData)
export const signup = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) => API.post('/questions/ask', questionData)
export const getQuestions = (questionsData) => API.get('/questions/get', questionsData)
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId })

export const postAnswer = (id, answerBody, userAnswred, userId) => API.patch(`/answer/post/${id}`, { answerBody, userAnswred, userId })
export const deleteAnswer = (id, answerId) => API.patch(`/answer/delete/${id}`, { answerId })