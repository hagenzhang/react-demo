import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";

import * as client from "./client"

/*
Screen that should display all of the details of the Quiz.

There should also be buttons in this screen to navigate to the Quiz Editor
and the Quiz preview.

TODO: formatting + quiz preview functionality!
*/

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

    return (
        <div id="quiz-details">
            <div id="quiz-view-buttons">
                <button className="btn btn-light btn-outline-secondary btn-sm me-1 float-end" id="cancel-bt">Preview</button>
                <Link to={`../Quizzes/Editor/Detail/${qid}`}
                    className="btn btn-light btn-outline-secondary btn-sm me-1 float-end" role="button">
                    <FaPencil className="position-relative me-2" /> Edit
                </Link>
            </div>

            {/* Quiz Title */}
            <h2><hr /><label id="quiz-title">{quiz.title}</label></h2>

            {/* Quiz details */}
            <div id="quiz-details-content">
                {/* <input className="padding" id="wd-name" defaultValue={quiz.name} /><br /><br /> */}
                <div className="quiz-details-content-cols">
                    <div id="quiz-details-left">
                        <span className="quiz-detail-category">Quiz Type</span>
                        <span className="quiz-detail-category">Points</span>
                        <span className="quiz-detail-category">Assignment Group</span>
                        <span className="quiz-detail-category">Shuffle Answers</span>
                        <span className="quiz-detail-category">Time Limit</span>
                        <span className="quiz-detail-category">Maximum Attempts</span>
                        {/* <span className="quiz-detail-category">View Respones</span> */}
                        <span className="quiz-detail-category">Show Correct Answers</span>
                        <span className="quiz-detail-category">One Quesiton at a Time</span>
                        <span className="quiz-detail-category">LockDown Browser</span>
                        {/* <span className="quiz-detail-category">Required to View Quiz Results</span> */}
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
                        {quiz.lockdown}
                        {/* {quiz.viewResults} */}
                        {quiz.webcamRequired}
                        {quiz.lockQuestionAfterAns}
                    </div>
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
    );

}