
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Quizzes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${new Date().getTime().toString()}`);
    };

    return (
        <div>
            <button className="btn btn-lg btn-danger me-1 float-end" onClick={handleAddAssignment}> + Add Quiz</button>
        </div>
    );
}


