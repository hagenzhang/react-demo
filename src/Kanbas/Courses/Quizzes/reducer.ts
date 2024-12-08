import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers : {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            /*
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
            }
            */
            state.quizzes = [...state.quizzes, quiz] as any;
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

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
    quizSlice.actions;
export default quizSlice.reducer;
