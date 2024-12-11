import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function QuizControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="input-group mb-3 float-start" style={{ width: '60%' }} >
                <span className="input-group-text">
                    <FaMagnifyingGlass />
                </span>
                <input type="text" placeholder="Search..." className="form-control" />
            </div>

            <div className="wd-button float-end">
                <Link to={"../Quiz/Editor"}
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    role="button"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                    Quiz
                </Link>
            </div>

            <div className="wd-button float-end">
                <Link to='#'
                    id="wd-add-group-btn"
                    className="btn btn-lg btn-secondary me-1 float-end"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                    Group
                </Link>{' '}
            </div>
        </div>
    );
}