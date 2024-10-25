import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { pathname } = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 nav nav-tabs">
            {links.map((link) => (
                <Link
                    id={`wd-course-${link.toLowerCase()}-link`}
                    key={link}
                    to={link}
                    className={`nav-item list-group-item bg-white border-0
                        ${pathname.includes(link) ? "text-black" : "text-danger"}`}>
                        {/* I couldn't get the left border stuff to work so I left it at this */}
                    {link}
                </Link>
            ))}
        </div>
    );
}
