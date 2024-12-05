import React from 'react'

import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';


export default function Quizzes() {
    const dispatch = useDispatch();

    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

}