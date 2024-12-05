import { Link, useNavigate, useParams } from "react-router-dom";

export default function Quizzes() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${new Date().getTime().toString()}`);
    };
    return (
        <div>
            <button className="btn btn-lg btn-danger me-1 float-end" onClick={handleAddAssignment}> + Add Quiz</button>
        </div>
    );
}

