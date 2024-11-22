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
            const ids = assignments.map(assignment => parseInt(assignment._id.substring(1)));
            let newIDValue = state.assignments.length + 1;

            ids.sort((a, b) => a - b);
            for (let i = 0; i <= ids.length; i++) {
                if (i !== ids[i]) {
                    newIDValue = i;
                }
            }

            const newAssignment: any = {
                _id: `A${newIDValue}`,
                title: assignment.title,
                course: assignment.course,
                release: assignment.release,
                close: assignment.close,
                due: assignment.due,
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

export const { addAssign, deleteAssign, updateAssign, editAssign } = assignmentSlice.actions;
export default assignmentSlice.reducer;