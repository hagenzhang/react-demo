import React from 'react';
import { useLocation } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { pathname } = useLocation();
    const assignments = db.assignments

    const assignmentID = pathname.split("/").pop()
    const assignment = assignments.find(obj => obj._id === assignmentID)

    return (
        <div id="wd-assignments-editor">
            <form className="p-4">
                <div className="form-group row mb-3">
                    <label htmlFor="wd-name" className="col-md-3 col-form-label text-md-end">
                        Name
                    </label>
                    <div className="col-md-9">
                        <input id="wd-name" className="form-control" defaultValue={assignment?.title} />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="wd-description" className="col-md-3 col-form-label text-md-end">
                        Description
                    </label>
                    <div className="col-md-9">
                        <textarea id="wd-description" className="form-control" rows={6}>
                            placeholder for the description, but we would get it via : "assignment?.description"
                        </textarea>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="wd-points" className="col-md-3 col-form-label text-md-end">
                        Points
                    </label>
                    <div className="col-md-9">
                        <input id="wd-points" className="form-control" defaultValue={assignment?.points} />
                    </div>
                </div>
                
                <div className="form-group row mb-3">
                    <label htmlFor="wd-assign-to" className="col-md-3 col-form-label text-md-end">
                        Assign
                    </label>
                    <div className="col-md-9 border border-gray rounded">
                        <label htmlFor="wd-assign-to-label" className="col col-form-label">
                            Assign To
                        </label>
                        <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />

                        <div className="form-group row mb-3">
                            <label htmlFor="wd-due-date" className="col col-form-label">
                                Due Date
                            </label>
                            <div>
                                <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="wd-available-from" className="col-md-3 col-form-label">
                                Available From
                            </label>
                            <div className="col-md-4">
                                <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
                            </div>
                            <label htmlFor="wd-available-until" className="col-md-2 col-form-label">
                                Until
                            </label>
                            <div className="col-md-3">
                                <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-20" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-9 offset-md-3">
                        <button type="button" className="btn btn-secondary me-2">Cancel</button>
                        <button type="button" className="btn btn-danger">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
