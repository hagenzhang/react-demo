import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

export default function AssignmentsControls({ assignmentName, setAssignmentName, addAssignment }:
    { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="input-group mb-3 float-start" style={{ width: '60%' }} >
                <span className="input-group-text">
                    <FaMagnifyingGlass />
                </span>
                <input type="text" placeholder="Search..." className="form-control" />
            </div>

            {currentUser.role === "FACULTY" && (
                <>
                    <button
                        id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                        Assignment
                    </button><button
                        id="wd-add-group-btn"
                        className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                        Group
                    </button>
                </>
            )}
        </div>
    );
}
