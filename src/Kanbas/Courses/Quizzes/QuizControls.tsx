import { AiOutlinePlus } from 'react-icons/ai';
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';
import { IoEllipsisVertical } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

export default function QuizControls() {
    const { cid } = useParams();

    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="input-group mb-3 float-start" style={{ width: '60%' }} >
                <span className="input-group-text">
                    <FaMagnifyingGlass />
                </span>
                <input type="text" placeholder="Search..." className="form-control" />
            </div>

            <div className="col-md-6 text-end">
                <a href={`#/Kanbas/Courses/${cid}/Quizzes/new/new`}>
                    <button id="wd-add-assignment" className="btn btn-danger btn-lg">
                        <AiOutlinePlus /> Quiz
                    </button>
                </a>
                <button
                    id="wd-add-assignment-group"
                    className="btn btn-secondary btn-lg ms-1"
                >
                    <IoEllipsisVertical className="fs-4" />
                </button>
            </div>
        </div>
    );
}