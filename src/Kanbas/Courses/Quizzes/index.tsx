
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import QuizControls from './QuizControls';

import * as client from "./client"
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from '../Assignments/AssignmentsControlButtons';
import AssignmentControlButtons from '../Assignments/AssignmentControlButtons';

export default function Quizzes() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quizzes, setQuizzes] = useState<any[]>([]);

    // Fetch Quizzes when component mounts
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const data = await client.findQuizzesForCourse(cid!);
                console.log("Quizzes fetched successfully!")
                setQuizzes(data);
            } catch (err) {
                console.error("Failed to load quizzes: ", err);
            }
        };
        fetchQuizzes();
    }, [cid]);

    const handleDeleteQuiz = async (quizID: string) => {
        try {
            await client.deleteQuiz(quizID);

            const data = await client.findQuizzesForCourse(cid!);
            setQuizzes(data)
        } catch (err) {
            console.error('Failed to delete + reload Quizzes: ', err)
        }
    }

    return (
        <div id="wd-quizzes">
            {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN")
                && (
                    <div className="wd-quiz-controls mb-5 pb-5">
                        <QuizControls />
                    </div>
                )}
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                QUIZZES
                <AssignmentsControlButtons />
            </div>

            <ul id="wd-quiz-list" className="list-group rounded-0">
                { quizzes
                    .map((quiz: any) => (
                        <li className="wd-quiz-list-item d-flex align-items-center list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            <div className="wd-quiz-info ps-3">
                                <a className="wd-quiz-link text-decoration-none"
                                    href={`#/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </a>
                                <br />
                                <span style={{ color: "crimson" }}> Multiple Modules </span>
                                | <b> Not available until: </b>
                                {`${quiz.availableDate}`} <br />
                                <b>Due</b> {`${quiz.dueDate}`} |
                                {` ${quiz.points} points`}
                            </div>

                            {currentUser.role === "FACULTY" && (
                                <AssignmentControlButtons
                                    assignmentID={quiz._id}
                                    deleteAssignment={handleDeleteQuiz} />
                            )}
                        </li>)
                    )
                }
            </ul>
        </div>
    );
}


