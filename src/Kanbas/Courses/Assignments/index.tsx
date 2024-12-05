import React from 'react';
import AssignmentsControls from './AssignmentsControls';
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssign } from "./reducer"

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-assignments">
            {currentUser.role === "FACULTY" && (
                <>
                    <AssignmentsControls />
                    <br />
                    <br />
                    <br />
                    <br />
                </>
            )}

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS
                <AssignmentsControlButtons />
            </div>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                {assignments
                    .filter((assign: any) => assign.course === cid)
                    .map((assign: any) => (
                        <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            <div className="wd-assignment-info ps-3">
                                <a className="wd-assignment-link text-decoration-none"
                                    href={`#/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`}>
                                    {assign.title}
                                </a>
                                <br />
                                <span style={{ color: "crimson" }}> Multiple Modules </span>
                                | <b> Not available until: </b>
                                {`${assign.release}`} <br />
                                <b>Due</b> {`${assign.due}`} |
                                {` ${assign.points} points`}
                            </div>

                            {currentUser.role === "FACULTY" && (
                                <AssignmentControlButtons
                                    assignmentID={assign._id}
                                    deleteAssignment={(assignmentID) => {
                                        dispatch(deleteAssign(assignmentID));
                                    }} />
                            )}
                        </li>)
                    )
                }
            </ul>
        </div >
    );
}

