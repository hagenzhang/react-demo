import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div
            id="wd-dashboard-class1"
            className="wd-dashboard-course col"
            style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/cs2800/Home"
              >
                <img
                  src="/images/acl2_logo.png"
                  width="100%"
                  height={160}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2800
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Logic and Computation
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div id="wd-dashboard-class2" className="wd-dashboard-course col" style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs3500/Home"
            >
              <img
                src="/images/java_logo.png"
                width="auto"
                height={160}
                alt=""
              />
              <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3500
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Design
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>

          <div id="wd-dashboard-class3" className="wd-dashboard-course col"style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs3650/Home"
            >
              <img
                src="/images/state_machine_logo.png"
                width="auto"
                height={160}
                alt=""
              />
             <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3650
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Computer Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>

          <div id="wd-dashboard-class4" className="wd-dashboard-course col"style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs3700/Home"
            >
              <img
                src="/images/python_logo.png"
                width="auto"
                height={160}
                alt=""
              />
              <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3700
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Networks and Distributed Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>

          <div id="wd-dashboard-class5" className="wd-dashboard-course col"style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs4400/Home"
            >
              <img
                src="/images/racket_logo.png"
                width="auto"
                height={160}
                alt=""
              />
              <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4400
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Programming Languages
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>

          <div id="wd-dashboard-class6" className="wd-dashboard-course col"style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs4520/Home"
            >
              <img
                src="/images/swift_logo.png"
                width="auto"
                height={160}
                alt=""
              />
              <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4520
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Mobile App Dev
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>

          <div id="wd-dashboard-class7" className="wd-dashboard-course col"style={{ width: '300px' }}
          >
            <div className="card rounded-3 overflow-hidden">
                <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/cs4550/Home"
            >
              <img
                src="/images/react_logo.png"
                width="auto"
                height={160}
                alt=""
              />
             <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4550
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
