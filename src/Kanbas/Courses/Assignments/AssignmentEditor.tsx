import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as client from './client'

export default function AssignmentEditor() {
    const { pathname } = useLocation();

    const classID = pathname.split("/")[3];
    const assignmentID = pathname.split("/").pop();

    const isNewAssignment = assignmentID === "Editor";

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(0);
    const [due, setDue] = useState("");
    const [release, setRelease] = useState("");
    const [close, setClose] = useState("");

    // Fetch assignment details if editing
    useEffect(() => {
        if (!isNewAssignment) {
            try {
                const setData = async () => {
                    const data: any = await client.getAssignment(assignmentID!)
                    setTitle(data.data.title || "");
                    setDescription(data.data.description || "");
                    setPoints(data.data.points || 0);
                    setDue(data.data.due || "");
                    setRelease(data.data.release || "");
                    setClose(data.data.close || "");

                    console.log("Details Fetched!")
                    console.log("data: ", data)
                };
                setData();
            } catch (err) {
                console.error(err);
            }
        }
    }, [assignmentID, isNewAssignment]);

    const handleSave = () => {
        const newAssignment = {
            title,
            description,
            course: classID,
            release,
            close,
            due,
            points,
        };

        if (isNewAssignment) {
            try {
                client.createAssignment(newAssignment)
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                client.updateAssignment(assignmentID!, newAssignment)
            } catch (err) {
                console.log(err)
            }
        }
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
                            value={title}
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
                            value={description}
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
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))} />
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
                                        value={due}
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
                                        value={release}
                                        onChange={(e) => setRelease(e.target.value)} />
                                </div>

                                <label htmlFor="wd-available-until" className="col-md-auto col-form-label">
                                    Until
                                </label>
                                <div className="col-md-auto">
                                    <input type="datetime-local"
                                        id="wd-available-until"
                                        className="form-control"
                                        value={close}
                                        onChange={(e) => setClose(e.target.value)} />
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
                            onClick={() => { handleSave() }}>
                            Save
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

