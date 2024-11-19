import { IoEllipsisVertical } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams } from "react-router";
import { FaTrash } from "react-icons/fa";


export default function AssignmentControlButtons({ assignmentID, deleteAssignment }: {
    assignmentID: string;
    deleteAssignment: (assignmentID: string) => void;
}) {
    const handleDelete = () => {
        const result = window.confirm("Do you want to proceed?");
        if (result) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="float-end" style={{ marginLeft: "auto" }}>
            <GreenCheckmark />
            <FaTrash className="text-danger"
                onClick={() => handleDelete() ? deleteAssignment(assignmentID) : null} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
