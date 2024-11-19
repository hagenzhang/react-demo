import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssign: (state, { payload: assignment }) => { 
            let maxNumber = -1
            
            assignments.forEach(a => {
                const number = parseInt(a._id.match(/\d+$/)![0]);
                if (number > maxNumber) {
                    maxNumber = number;
                }
            });

            const newAssignment: any = {
                _id: `A${maxNumber + 1}`,
                title: assignment.title,
                course: assignment.name,
                release_date: assignment.course,
                release_time: assignment.release_time, 
                due_date: assignment.release_date,
                due_time: assignment.due_time,
                points: assignment.points,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssign: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentID);
        },
        updateAssign: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
            ) as any;
        },
        editAssign: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignmentID ? { ...m, editing: true } : m
            ) as any;
        },
    },
});

export const { addAssign, deleteAssign, updateAssign, editAssign } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;