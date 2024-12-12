import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { format } from 'date-fns';

import QuizControls from './QuizControls';

import * as client from "./client"
import { BsGripVertical } from 'react-icons/bs';
import QuizMenu from './QuizMenu';

/*
Renders the "Main" screen for quizzes.

 - TODO: need to implement the triple dot dropdown menu and the published / unpublished logic.

 - if the user is a student, display their score if they took the exam.

*/

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

export default function Quizzes() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [quizzes, setQuizzes] = useState<any[]>([]);

    const [pointsDict, setPointsDict] = useState<{ [key: string]: number }>({});
    const [questionsDict, setQuestionsDict] = useState<{ [key: string]: number }>({});

    // Fetch quizzes and their data
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const data = await client.findQuizzesForCourse(cid!);
                setQuizzes(data);

                const points: any = {};
                const questions: any = {};

                for (const quiz of data) {
                    points[quiz._id] = await getPointCount(quiz._id);
                    questions[quiz._id] = await getQuestionCount(quiz._id);
                }
                setPointsDict(points);
                setQuestionsDict(questions);

            } catch (err) {
                console.error('Failed to fetch quizzes or their data:', err);
            }
        };

        fetchQuizzes();
    }, [cid]);

    // Gets the total points of a given Quiz via ID
    async function getPointCount(quizID: string) {
        const quizQuestionList = await client.getQuizQuestions(quizID);
        console.log(`Retrieved Quiz Questions: ${ quizQuestionList.questions } for Quiz ID ${ quizID }`)
        const questions = quizQuestionList.questions || [];
        const totalPoints = questions.reduce((sum: any, question: any ) => sum + (question.points || 0), 0);

        return totalPoints;
    }

    // Gets the number of Questions of a given Quiz via ID
    async function getQuestionCount(quizID: string) {
        const quizQuestionList = await client.getQuizQuestions(quizID)
        console.log(`Retrieved Quiz Questions: ${ quizQuestionList } for Quiz ID ${ quizID }`)
        const questions = quizQuestionList.questions || [];
        return questions.length;
    }
    
    const handleDeleteQuiz = async (quizID: string) => {
        try {
            await client.deleteQuiz(quizID);
            const data = await client.findQuizzesForCourse(cid!);
            setQuizzes(data)
        } catch (err) {
            console.error('Failed to delete + reload Quizzes: ', err)
        }
    }

    const handleTogglePublishQuiz = async (quizID: string) => {
        try {
            const selectedQuiz = await client.getQuiz(quizID);
            const newQuiz = {...selectedQuiz, published: !selectedQuiz.published}
            await client.updateQuiz(quizID, newQuiz);
            const data = await client.findQuizzesForCourse(cid!);
            setQuizzes(data);
        } catch (err) {
            console.error('Failed to publish + reload Quizzes: ', err)
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

                                <b>{isQuizAvailable(quiz.availableDate, quiz.closeDate)} </b> | <b>Due:</b> {formatDate(quiz.dueDate)}
                                {` | ${pointsDict[quiz._id]} pts | ${questionsDict[quiz._id]} Questions`}
                            </div>

                            {currentUser.role === "FACULTY" && (
                                <QuizMenu
                                    quizID={quiz._id}
                                    published={quiz.published}
                                    deleteQuiz={handleDeleteQuiz} 
                                    publishQuiz={handleTogglePublishQuiz}
                                    />
                            )}
                        </li>)
                    )
                }
            </ul>
        </div>
    );
}