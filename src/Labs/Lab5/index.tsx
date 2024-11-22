import React from "react";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href="http://localhost:4000/lab5/welcome"
                    className="list-group-item">
                    Welcome
                </a>
            </div><hr />

            <EnvironmentVariables />
            <PathParameters />
            <QueryParameters />
            <WorkingWithObjects />
        </div>
    );
}
