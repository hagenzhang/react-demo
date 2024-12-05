import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

const initialState = {
    quizzes: [],
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers : {
        addQuiz: (state, { payload: quiz }) => {

        },
        deleteQuiz: (state, { payload: quizID }) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizID
            );
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map(
                (q: any) => q._id === quiz._id ? quiz : q
            ) as any;
        },
        editQuiz: (state, { payload: quizID }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quizID ? { ...q, editing: true } : q
            ) as any;
        },
    }
});
