import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const updateQuiz= async (quiz: any) => {
    const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`,quiz);
    return data;
};  

// export const deleteAssignment = async (assignmentId: string) => {
//     const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
//     return response.data;
// };