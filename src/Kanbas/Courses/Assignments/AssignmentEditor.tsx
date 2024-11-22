import React, { useState } from 'react';
import { addAssign, updateAssign } from './reducer'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function AssignmentEditor() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const classID = pathname.split("/")[3];
    const assignmentID = pathname.split("/").pop();

    const isNewAssignment = assignmentID === "Editor";

    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const existingAssignment = assignments.find((obj: { _id: string | undefined; }) => obj._id === assignmentID);

    const [title, setTitle] = useState(existingAssignment?.title || "");
    const [description, setDescription] = useState(existingAssignment?.description || "");
    const [points, setPoints] = useState(existingAssignment?.points || 0);
    const [due, setDue] = useState(existingAssignment?.due || "");
    const [release, setRelease] = useState(existingAssignment?.release || "");
    const [close, setClose] = useState(existingAssignment?.close || "");

    const handleSave = () => {
        const newAssignment = {
            title,
            description,
            points,
            due,
            release,
            close,
            course: classID,
        };

        if (isNewAssignment) {
            dispatch(addAssign(newAssignment));
        } else {
            dispatch(updateAssign({ ...newAssignment, _id: assignmentID }));
        }

        navigate(`/Kanbas/Courses/${classID}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <form className="p-4">
                <div className="form-group row mb-3">
                    <label htmlFor="wd-name" className="col-md-3 col-form-label text-md-end">
                        Name
                    </label>
                    <div className="col-md-9">
                        <input id="wd-name"
                            className="form-control"
                            defaultValue={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="wd-description" className="col-md-3 col-form-label text-md-end">
                        Description
                    </label>
                    <div className="col-md-9">
                        <input id="wd-description"
                            className="form-control"
                            defaultValue={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="wd-points" className="col-md-3 col-form-label text-md-end">
                        Points
                    </label>
                    <div className="col-md-9">
                        <input id="wd-points"
                            className="form-control"
                            defaultValue={points}
                            onChange={(e) => setPoints(e.target.value)} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="wd-assign-to" className="col-md-3 col-form-label text-md-end">
                        Assign
                    </label>

                    <div className="col-md-9">
                        <div className="px-2 border border-gray rounded">
                        <div className="form-group row mb-2 w-auto">
                            <label htmlFor="wd-due-date" className="col col-form-label">
                                Due Date
                            </label>
                            <div>
                                <input type="datetime-local"
                                    id="wd-due-date"
                                    className="form-control"
                                    defaultValue={due}
                                    onChange={(e) => setDue(e.target.value)} />
                            </div>
                            
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="wd-available-from" className="col-md-auto col-form-label">
                                Available From
                            </label>
                            <div className="col-md-auto">
                                <input type="datetime-local"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue={release}
                                    onChange={(e) => setRelease(e.target.value)}/>
                            </div>

                            <label htmlFor="wd-available-until" className="col-md-auto col-form-label">
                                Until
                            </label>
                            <div className="col-md-auto">
                                <input type="datetime-local"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue={close}
                                    onChange={(e) => setClose(e.target.value)}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-9 offset-md-3">
                        <Link to={`/Kanbas/Courses/${classID}/Assignments`}
                            className="btn" style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}>
                            Cancel
                        </Link>

                        <Link to={`/Kanbas/Courses/${classID}/Assignments`}
                            className="btn btn-danger"
                            style={{ marginLeft: "5px" }}
                            onClick={() => {handleSave()}}>
                            Save
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

