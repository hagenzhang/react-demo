import axios from "axios"

/*
Handles all of the quiz CRUD operations.
Note that we don't need to provide quiz ID for creating a new quiz!
This is because of nanoid, it will help us generate the ID in the backend.
*/


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
    return response.data;
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

// ============================================================================

export const getQuizQuestions = async (quizID: string) => {
    const response = await axiosWithCredentials
        .get(`${QUIZ_API}/questions/${quizID}`);
    console.log("getQuizQuestions Reponse: ", response.data)
    return response.data
}

// assign a bunch of questions to a quiz
// questions body should come as:
// { questions: [ ... ] }
export const updateQuizQuestions = async (quizID: string, questionsObj: any) => {
    const response = await axiosWithCredentials
        .post(`${QUIZ_API}/${quizID}/questions`, questionsObj);
    return response.data;
}