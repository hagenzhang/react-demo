import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <div className="input-group mb-3 float-start" style={{ width: '60%' }} >
        <span className="input-group-text">
          <FaMagnifyingGlass />
        </span>
        <input type="text" className="form-control"/>
      </div>

      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Assignment
      </button>
      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Group
      </button>
    </div>
  );
}
