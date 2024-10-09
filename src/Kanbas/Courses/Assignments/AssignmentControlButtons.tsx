import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end" style={{ marginLeft:"auto"}}>
    <GreenCheckmark />
    <IoEllipsisVertical className="fs-4" />
    </div>
);}
