import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials
        .post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
}

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const deleteAssignment = async (assignmentID: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${assignmentID}`);
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${assignment._id}`, assignment);
    return data;
};