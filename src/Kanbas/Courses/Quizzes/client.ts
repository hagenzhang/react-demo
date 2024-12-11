import axios from "axios"

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;

export const findQuizzesForCourse = async (courseID: string) => {
    const response = await axiosWithCredentials
        .get(`${QUIZ_API}/${courseID}/quizzes`);
    return response.data;
};

export const getQuiz = async (quizID: string) => {
    const response = await axiosWithCredentials
        .get(`${QUIZ_API}/${quizID}`)
    return response
};

export const createQuiz = async (quiz: any) => {
    const response = await axiosWithCredentials
        .post(`${QUIZ_API}`, quiz);
    return response.data;
};

export const deleteQuiz = async (quizID: string) => {
    const response = await axiosWithCredentials
        .delete(`${QUIZ_API}/${quizID}`);
    return response;
};

export const updateQuiz = async (quizID: string, quiz: any) => {
    const { data } = await axiosWithCredentials
        .put(`${QUIZ_API}/${quizID}`, quiz);
    return data;
}

