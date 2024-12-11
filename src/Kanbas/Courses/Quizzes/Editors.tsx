import { CiNoWaitingSign } from "react-icons/ci";
import { Link, useLocation, useParams } from "react-router-dom";
import * as client from "./client";
import { useState } from "react";
import QuizEditor from "./QuizEditor";
import QuestionEditor from "./QuizQuestion/QuestionEditor";

export default function Editors() {
   const { cid, qid } = useParams();
   const { pathname } = useLocation();

   const [totalPoints, setTotalPoints] = useState(0);

   const links = [
      { label: "Detail", path: `/Kanbas/Courses/${cid}/Quizzes/Detail/${qid}`},
      { label: "Questions", path: `/Kanbas/Courses/${cid}/Quizzes/Questions/${qid}`},
   ];
   return (
      <div>
         <div className="my-4 pb-3">
            <h5 className="published float-end">
               <CiNoWaitingSign /> Not Published
            </h5>

            <h5 className="points float-end mx-5" style={{ marginLeft: '150px' }}>
               Points: {totalPoints}
            </h5>
         </div> <hr />
         <div className="navigation-quiz" style={{ display: 'flex', gap: '10px' }}>
            {links.map((link) => (
               <Link key={link.path} to={link.path} className={`text-danger border-0'
                        ${pathname.includes(link.label) ? "text-black border-top border-start border-end border-1 border-black border-2" : "text-danger"}`}
                  style={{ display: 'inline-block', textDecoration: 'none' }}>
                  <br />
                  {link.label}
               </Link>
            ))}
         </div>
        
         {pathname.includes('Detail') ? <QuizEditor /> : <QuestionEditor />}
      </div>


   );
}