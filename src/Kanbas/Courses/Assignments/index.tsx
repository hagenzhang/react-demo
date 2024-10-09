import React from 'react';
import AssignmentsControls from './AssignmentsControls';
import { BsGripVertical, BsPencilSquare } from 'react-icons/bs';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /> <br /> <br /> <br /> <br />
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS
        <AssignmentsControlButtons />
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <BsPencilSquare className="text-success me-1 fs-5" />
        <div className="wd-assignment-info ps-3"> 
            <a
            className="wd-assignment-link text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/1"
           >
            A1 - ENV + HTML
          </a>
          <br />
          <span style={{color:"crimson"}}> Multiple Modules </span>| <b>Not available until</b> May 6 at 12:00am |<br />
          <b>Due</b> May 13, 11:59pm | 100 pts
        </div>
        <AssignmentControlButtons />
        </li>

        <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <BsPencilSquare className="text-success me-1 fs-5" />
        <div className="wd-assignment-info ps-3"> 
          <a
            className="wd-assignment-link text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/2"
          >
            A2 - ENV + HTML
          </a>
          <br />
          <span style={{color:"crimson"}}> Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am |
          <br />
          <b>Due</b> May 20, 11:59pm | 100 pts
          </div>
          <AssignmentControlButtons />
        </li>

        <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <BsPencilSquare className="text-success me-1 fs-5" />
        <div className="wd-assignment-info ps-3"> 
          <a
            className="wd-assignment-link text-decoration-none"
            href="#/Kanbas/Courses/1234/Assignments/2"
          >
            A2 - ENV + HTML
          </a>
          <br />
          <span style={{color:"crimson"}}> Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am |
          <br />
          <b>Due</b> May 27, 11:59pm | 100 pts
          </div>
          <AssignmentControlButtons />
        </li>
      </ul>
    </div>
  );
}
