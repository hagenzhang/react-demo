import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./style.css";

export default function QuestionDetails() {
    const { cid } = useParams();
    return (
        <div className="center-container">
            <div>
                <button className="new-question-btn btn btn-secondary" id="new-question"><FaPlus />New Question</button>
            </div>
            <div>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
                    <button className="bottom-buttons float-end btn btn-danger" id="save-bt">Save</button>
                </Link>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className={`list-group-item list-group-item-action text-danger border-0'`}>
                    <button className="bottom-buttons float-end btn btn-secondary" id="cancel-bt">Cancel</button>
                </Link>
            </div>
        </div>
    );
}