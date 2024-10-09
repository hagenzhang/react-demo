import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
    <span className="border p-2 rounded-5" style={{marginLeft: "0px"}}>40% of Total</span>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
