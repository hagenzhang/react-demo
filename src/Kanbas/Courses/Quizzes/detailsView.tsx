import { Link } from "react-router-dom";
import { Navigate, Route, Routes, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";
import detailEditor from "./detailEditor";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetailsView() {
    const { cid, aid } = useParams();
    const quizzes = db.quizzes;
    /*
    - Quiz Type - Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded Survey
    - Points - the sum of the points of all questions in the quiz
    - Assignment Group - Quizzes (default), Exams, Assignments, Project
    - Shuffle Answers - Yes (default) / No
    - Time Limit - 20 Minutes (default)
    - Multiple Attempts - No (default) / Yes
    - How Many Attempts - 1 (default). If Multiple Attempts is Yes, then can configure how many times the student can retake the quiz
    - Show Correct Answers - If and when correct answers are shown to students
    - Access Code - Passcode students need to type to access the quiz. Default is blank
    - One Question at a Time - Yes (default) / No
    - Webcam Required - No (default) / Yes
    - Lock Questions After Answering - No (default) / Yes
    - Due date - date the assignment is due
    - Available date - date assignment is available
    - Until date - date assignment is available until
    */

    return (
        <div>
            {/* Quiz title here */}
            <h2><label id="quiz-title">Quiz Name</label></h2>

            <button className="bottom-buttons float-end btn" id="cancel-bt">Preview</button>
            {/* <button className="bottom-buttons float-end btn" id="cancel-bt"> <FaPencil /> Edit</button> */}
            <Link to={"./Quizzes/detailEditor"}
                className="btn btn-lg btn-danger me-1 float-end" role="button">
                <FaPencil className="position-relative me-2" /> Edit
            </Link>
            <hr />

            {/* Quiz details */}
            <div id="quiz-details-content">
                {quizzes
                    .filter((quiz: any) => quiz.course === cid && quiz._id == aid)
                    .map((quiz) => (
                        <div>
                            <input className="padding" id="wd-name" defaultValue={quiz.title} /><br /><br />
                            <div id="quiz-details-content-col">
                                <div id="quiz-details-left">
                                    <span className="quiz-detail-category">Quiz Type</span>
                                    <span className="quiz-detail-category">Points</span>
                                    <span className="quiz-detail-category">Assignment Group</span>
                                    <span className="quiz-detail-category">Shuffle Answers</span>
                                    <span className="quiz-detail-category">Time Limit</span>
                                    <span className="quiz-detail-category">Multiple Attempts</span>
                                    <span className="quiz-detail-category">View Respones</span>
                                    <span className="quiz-detail-category">Show Correct Answers</span>
                                    <span className="quiz-detail-category">One Quesiton at a Time</span>
                                    <span className="quiz-detail-category">Require Respondus LockDown Browser</span>
                                    <span className="quiz-detail-category">Required to View Quiz Results</span>
                                    <span className="quiz-detail-category">Webcam Required</span>
                                    <span className="quiz-detail-category">Lock Questions After Answering</span>
                                </div>
                                <div id="quiz-details-right">
                                    {quiz.quizType}
                                    {quiz.points}
                                    {quiz.assignmentGroup}
                                    {quiz.shuffleAnswers}
                                    {quiz.timeLimitMin}
                                    {quiz.maxAttempts}
                                    {/* {quiz.viewResponses} */}
                                    {quiz.showCorrectAnswers}
                                    {quiz.oneQuestionAtATime}
                                    {quiz.lockQuestionAfterAns}
                                    {/* {quiz.viewResults} */}
                                    {quiz.webcamRequired}
                                    {/* {quiz.lockQuestionAfterAns} */}
                                </div>
                            </div>

                            {/* Dates table */}
                            <table>
                                <tr>
                                    <th>Due</th>
                                    <th>For</th>
                                    <th>Available from</th>
                                    <th>Until</th>
                                </tr>
                                <tr>
                                    <td>{quiz.dueDate}</td>
                                    <td>Everyone</td>
                                    <td>{quiz.availableDate}</td>
                                    <td>{quiz.closeDate}</td>
                                </tr>
                            </table>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

{/* <span className="quiz-detail-category">Quiz Type</span>
                            {quiz.type}

                            <span className="quiz-detail-category">Points</span>
                            {quiz.points}

                            <span className="quiz-detail-category">Assignment Group</span>
                            {quiz.assignmentGroup}

                            <span className="quiz-detail-category">Shuffle Answers</span>
                            {quiz.shuffle}

                            <span className="quiz-detail-category">Time Limit</span>
                            {quiz.time}

                            <span className="quiz-detail-category">Multiple Attempts</span>
                            {quiz.attempts}

                            <span className="quiz-detail-category">View Respones</span>
                            {quiz.viewResponses}

                            <span className="quiz-detail-category">Show Correct Answers</span>
                            {quiz.showAnswers}

                            <span className="quiz-detail-category">One Quesiton at a Time</span>
                            {quiz.oneAtATime}

                            <span className="quiz-detail-category">Require Respondus LockDown Browser</span>
                            {quiz.lockdown}

                            <span className="quiz-detail-category">Required to View Quiz Results</span>
                            {quiz.viewResults}

                            <span className="quiz-detail-category">Webcam Required</span>
                            {quiz.webcam}

                            <span className="quiz-detail-category">Lock Questions After Answering</span>
                            {quiz.lockQuestions} */}