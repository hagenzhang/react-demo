
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { format } from 'date-fns';

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

    // Formats the time strings into something human-readable
    function formatDate(dateString: string): string {
        return format(new Date(dateString), 'MM/dd/yyyy, hh:mm a');
    }

    // Checks if the quiz is still available based on the current date and the available / close date strings.
    function isQuizAvailable(availableDate: string, closeDate: string): string {
        const now = new Date();
        const close = new Date(closeDate)
        const open = new Date(availableDate)
        
        if (close < now) {
            return "Closed";
        } else if (open > now) {
            return "Not Available Until " + open
        } else {
            return "Available"
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
                {quizzes
                    .filter((quiz: any) => {
                        if (currentUser.role === "STUDENT") {
                            return quiz.published! // if the quiz is published, display. else, false
                        }
                        return true // if you're not a student, display all quizzes regardless of published status
                    })
                    .map((quiz: any) => (
                        <li className="wd-quiz-list-item d-flex align-items-center list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            <div className="wd-quiz-info ps-3">
                                <a className="wd-quiz-link text-decoration-none"
                                    href={`#/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </a>

                                <br />

                                <b>{ isQuizAvailable(quiz.availableDate, quiz.closeDate) } </b> | <b>Due:</b> { formatDate(quiz.dueDate) }
                                { ` | ${quiz.points} points | # quiz questions here (TODO)` } 
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


