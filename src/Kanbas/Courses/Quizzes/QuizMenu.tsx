import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FcCancel } from "react-icons/fc";

function PopUpMenu({ quizId, deleteQuiz, publishQuiz, published }:
    { quizId: string, deleteQuiz: (quizID: string) => void, publishQuiz: (quizID: string) => void, published: boolean }): JSX.Element {
    const { cid } = useParams();
    return (

        <div className="dropdown d-inline me-1 float-end">
            <button className="btn p-0"
                type="button" data-bs-toggle="dropdown">
                <IoEllipsisVertical className="fs-4" /></button>
            <ul className="dropdown-menu">
                <li>
                    <a className="text-decoration-none"
                        href={`#/Kanbas/Courses/${cid}/Quizzes/Editor/Detail/${quizId}`}>
                        <button className="dropdown-item">
                            Edit
                        </button>

                    </a>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => deleteQuiz(quizId)}>
                        Delete
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => publishQuiz(quizId)}>
                        {published ? <FcCancel /> : <GreenCheckmark />}
                        {published ? "Unpublish" : "Publish"}
                    </button>
                </li>
            </ul>
        </div>
    );
}



export default function QuizMenu({
    quizID,
    published,
    deleteQuiz,
    publishQuiz,
}: {
    quizID: string;
    published: boolean;
    deleteQuiz: (quizID: string) => void;
    publishQuiz: (quizID: string) => void;
}) {
    return (
        <div className="float-end" style={{ marginLeft: "auto" }}>
            {published && (
                <GreenCheckmark />
            )}
            <PopUpMenu quizId={quizID} published={published} deleteQuiz={() => deleteQuiz(quizID)} publishQuiz={() => publishQuiz(quizID)} />
        </div>
    );
}