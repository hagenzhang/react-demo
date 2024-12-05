import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

import * as client from "./client";


export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));

        console.log(currentUser)
        navigate("/Kanbas/Dashboard");
    };

    const signup = () => { navigate("/Kanbas/Account/Signup") };

    return (
        <div id="wd-signin-screen" className="m-3">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="username" className="form-control mb-2"
                defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />

            <input id="wd-password" placeholder="password" type="password" className="form-control mb-2"
                defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-1">
                Sign in
            </button>

            <button onClick={signup} id="wd-signup-btn" className="btn btn-primary w-100 mt-1">
                Sign Up
            </button>
        </div>
    );
}
