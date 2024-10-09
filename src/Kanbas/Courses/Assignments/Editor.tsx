import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form className="p-4">
    <div className="form-group row mb-3">
        <label htmlFor="wd-name" className="col-md-3 col-form-label text-md-end">Assignment Name</label>
        <div className="col-md-9">
            <input id="wd-name" className="form-control" defaultValue="A1" />
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-description" className="col-md-3 col-form-label text-md-end">Description</label>
        <div className="col-md-9">
            <textarea id="wd-description" className="form-control" rows={6}>
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: your full name and section, links to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-points" className="col-md-3 col-form-label text-md-end">Points</label>
        <div className="col-md-9">
            <input id="wd-points" className="form-control" defaultValue={100} />
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-group" className="col-md-3 col-form-label text-md-end">Assignment Group</label>
        <div className="col-md-9">
            <select id="wd-group" className="form-control">
                <option value="assignments">ASSIGNMENTS</option>
            </select>
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-md-3 col-form-label text-md-end">Display Grade As</label>
        <div className="col-md-9">
            <select id="wd-display-grade-as" className="form-control">
                <option value="percent">Percentage</option>
            </select>
        </div>
    </div>

    <div className="form-group row mb-3">
        <label className="col-md-3 col-form-label text-md-end">Online Entry Options</label>
        <div className="col-md-9">
        <label htmlFor="wd-submission-type" className="col-md-3 col-form-label text-md-end">Submission Type</label>
        <div className="col-md-9">
            <select id="wd-submission-type" className="form-control">
                <option value="online">Online</option>
            </select>
        </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-assign-to" className="col-md-3 col-form-label text-md-end">Assign To</label>
        <div className="col-md-9">
            <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-due-date" className="col-md-3 col-form-label text-md-end">Due Date</label>
        <div className="col-md-9">
            <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
        </div>
    </div>

    <div className="form-group row mb-3">
        <label htmlFor="wd-available-from" className="col-md-3 col-form-label text-md-end">Available From</label>
        <div className="col-md-4">
            <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
        </div>
        <label htmlFor="wd-available-until" className="col-md-2 col-form-label text-md-end">Until</label>
        <div className="col-md-3">
            <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-20" />
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
