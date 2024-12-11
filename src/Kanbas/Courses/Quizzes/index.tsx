
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { setQuizzes} from "./reducer";
import * as coursesClient from "../client";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuizControls from './QuizControls';


export default function Quizzes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const quizzes = useSelector(
        (state: any) => state.quizReducer
        ).quizzes.filter((quiz: any) => quiz.course === cid);
    console.log(quizzes);
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${new Date().getTime().toString()}`);
    };
    const fetchQuizzes = async () => {
        const assignments = await coursesClient.findQuizForCourse(cid as string);
        dispatch(setQuizzes(assignments));
      };
      useEffect(() => {
        fetchQuizzes();
      }, []);

    return (
        <div id="wd-quizzes">
            { (currentUser.role === "FACULTY" || currentUser.role === "ADMIN")
            && (
                <>
                    <QuizControls />
                </>
            ) }
            <button className="btn btn-lg btn-danger me-1 float-end" onClick={handleAddAssignment}> + Add Quiz</button>

            {quizzes
                .map((assignment: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1"></li>

                ))}
        </div>
    );
}


