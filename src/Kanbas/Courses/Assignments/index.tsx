import React, { useEffect, useState } from 'react';
import AssignmentsControls from './AssignmentsControls';
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import * as client from './client'

export default function Assignments() {
    const dispatch = useDispatch();

    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [assignments, setAssignments] = useState<any[]>([]);

    // Fetch assignments when component mounts
    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const data = await client.findAssignmentsForCourse(cid!);
                console.log("Assignments fetched successfully!")
                setAssignments(data);
            } catch (err) {
                console.error("Failed to load assignments: ", err);
            }
        };
        fetchAssignments();
    }, [cid]);

    // Handle assignment deletion
    const handleDeleteAssignment = async (assignmentID: string) => {
        try {
            // Call the backend to delete the assignment
            await client.deleteAssignment(assignmentID)

            // Re-fetch the assignments
            const data = await client.findAssignmentsForCourse(cid!);
            setAssignments(data);
        } catch (err) {
            console.error("Failed to delete + reload assignments: ", err);
        }
    };

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
                                    deleteAssignment={handleDeleteAssignment} />
                            )}
                        </li>)
                    )
                }
            </ul>
        </div >
    );
}

