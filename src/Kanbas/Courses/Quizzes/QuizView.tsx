import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";

import * as client from "./client"

export default function QuizView() {
    const { cid, qid } = useParams();

    const [quiz, setQuiz] = useState<any>({});

    // Fetch the quiz each time the qid changes
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const data = await client.getQuiz(qid!);
                console.log("Quiz fetched successfully!")
                setQuiz(data.data);
            } catch (err) {
                console.error("Failed to load assignments: ", err);
            }
        };
        fetchQuiz();
    }, [qid, cid]);

    /*
        _id: "q0",
        title: "Default Quiz",
        description: "A Very Default Description Here",
        course: "RS101",
        quizType: quizType.GRADED,
        points: 100,
        assignmentGroup: quizGroup.QUIZZES,
        shuffleAnswers: true,
        timeLimitMin: 20,
        maxAttempts: 1, // no multiple attempts boolean, just set this value
        showCorrectAnswers: true,
        accessCode: "",
        oneQuestionAtATime: true, // one question at a time
        webcamRequired: false,
        lockQuestionAfterAns: false,
        dueDate: "2025-05-15T23:59",
        availableDate: "2024-05-15T00:00",
        closeDate: "2025-05-16T23:59", // until date equivalent
    */

    return (
        <div>
            <h2><label id="quiz-title">{quiz.title}</label></h2>

            <button className="bottom-buttons float-end btn" id="cancel-bt">Preview</button>
            {/* <button className="bottom-buttons float-end btn" id="cancel-bt"> <FaPencil /> Edit</button> */}
            <Link to={`../Quizzes/Editor/${qid}`}
                className="btn btn-lg btn-danger me-1 float-end" role="button">
                <FaPencil className="position-relative me-2" /> Edit
            </Link>
            <hr />

            {/* Quiz details */}
            <div id="quiz-details-content">
                <div>
                    <input className="padding" id="wd-name" defaultValue={quiz.name} /><br /><br />
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
                            {quiz.type}
                            {quiz.points}
                            {quiz.assignmentGroup}
                            {quiz.shuffle}
                            {quiz.time}
                            {quiz.attempts}
                            {quiz.viewResponses}
                            {quiz.showAnswers}
                            {quiz.oneAtATime}
                            {quiz.lockdown}
                            {quiz.viewResults}
                            {quiz.webcam}
                            {quiz.lockQuestions}
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
                            <td>{quiz.availableFrom}</td>
                            <td>{quiz.availableUntil}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );

}



/* <span className="quiz-detail-category">Quiz Type</span>
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
                            {quiz.lockQuestions} */