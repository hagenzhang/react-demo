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
    const response = await axiosWithCredentials.delete(
        `${QUIZ_API}/${quizID}`
    );
    return response.data;
};

export const updateQuiz = async (quizID: string, quiz: any) => {
    const { data } = await axiosWithCredentials.put(
        `${QUIZ_API}/${quizID}`,
        quiz
    );
    return data;
}

// ============================================================================

export const getQuizQuestions = async (quizID: string) => {
    console.log("getQuizQuestions:", `${QUIZ_API}/${quizID}/questions`)

    const response = await axiosWithCredentials.get(
        `${QUIZ_API}/${quizID}/questions`
    );
    return response.data;
}

export const createQuestionsForQuiz = async (quizId: any, question: any) => {
    const response = await axiosWithCredentials.post(
        `${QUIZ_API}/${quizId}/questions`,
        question
    );
    return response.data;
};
