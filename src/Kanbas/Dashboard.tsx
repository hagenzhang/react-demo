import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div id="wd-dashboard-class1" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs2800/Home">
                        <img src="/images/acl2_logo.png" width={200} height={200} alt="" />
                        <div>
                            <h5>
                                CS2800
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Logic and Computation
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class2" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs3500/Home">
                        <img src="/images/java_logo.png" width={200} height={200} alt=""/>
                        <div>
                            <h5>
                                CS3500
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Object Oriented Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class3" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs3650/Home">
                        <img src="/images/state_machine_logo.png" width={200} height={200} alt=""/>
                        <div>
                            <h5>
                                CS3650
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Computer Systems
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class4" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs3700/Home">
                        <img src="/images/python_logo.png" width={200} height={200} alt="" />
                        <div>
                            <h5>
                                CS3700
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Networks and Distributed Systems
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class5" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs4400/Home">
                        <img src="/images/racket_logo.png" width={200} height={200} alt="" />
                        <div>
                            <h5>
                                CS4400
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Programming Languages
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class6" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs4520/Home">
                        <img src="/images/swift_logo.png" width={200} height={200} alt="" />
                        <div>
                            <h5>
                                CS4520
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Mobile App Dev
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div id="wd-dashboard-class7" className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/cs4550/Home">
                        <img src="/images/react_logo.png" width={200} height={200} alt="" />
                        <div>
                            <h5>
                                CS4550
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Web Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
