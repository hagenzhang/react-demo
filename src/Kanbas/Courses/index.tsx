import React from 'react';

import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';
import { Route, Routes, useParams, useLocation } from 'react-router';
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';

import { useSelector } from "react-redux";
import Quizzes from './Quizzes';
import DetailEditor from './Quizzes/QuizEditor';
import QuizView from "./Quizzes/QuizView";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={
                            currentUser.role === "FACULTY" ? (<AssignmentEditor />) : "TODO"} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={ currentUser.role === "FACULTY" ? (<DetailEditor />) : "TODO"} />
                        <Route path="Details" element={<QuizView />} />
                        <Route path="Questions" element={ <></> /** <QuestionDetails/>} */ } />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
