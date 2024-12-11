import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${ASSIGNMENT_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (assignment: any) => {
    const response = await axiosWithCredentials
        .post(`${ASSIGNMENT_API}`, assignment);
    return response.data;
}

export const getAssignment = async (assignmentID: string) => {
    const response = await axiosWithCredentials
        .get(`${ASSIGNMENT_API}/${assignmentID}`)
    return response
}

export const deleteAssignment = async (assignmentID: string) => {
    const response = await axiosWithCredentials
        .delete(`${ASSIGNMENT_API}/${assignmentID}`);
    return response;
};

export const updateAssignment = async (assignmentID: string, assignment: any) => {
    const { data } = await axiosWithCredentials
        .put(`${ASSIGNMENT_API}/${assignmentID}`, assignment);
    return data;
};