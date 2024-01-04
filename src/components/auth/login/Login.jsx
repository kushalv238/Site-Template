import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import GoogleButton from "./../../util-components/GoogleButton";

import toast from "react-hot-toast";
import processMessage from "../../../utility/processMessage";

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const { logIn, googleSignIn } = useUserAuth();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()

        setSubmitButtonDisabled(true)

        try {
            await googleSignIn()
            toast.success('Successfully logged in!')
            navigate("/")
        } catch (err) {
            toast.error(processMessage(err.message))
        } finally {
            setSubmitButtonDisabled(false)
        }
    }
    
    const handleSubmission = async (e) => {
        e.preventDefault()
        
        if (!values.email || !values.pass) {
            toast.error("Fill all fields");
            return;
        }
        
        setSubmitButtonDisabled(true);

        try {
            await logIn(values.email, values.pass)
            toast.success('Successfully logged in!')
            navigate("/")
        } catch (err) {
            toast.error(processMessage(err.message))
        } finally {
            setSubmitButtonDisabled(false)
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-cards">
                <p className="heading">Login</p>
                <form onSubmit={handleSubmission} className="auth-form flex flex-col gap-4">
                    <input
                        label="Email"
                        value={values.email}
                        autoFocus
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                    />
                    <input
                        label="Password"
                        type="password"
                        value={values.pass}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                        placeholder="Enter Password"
                    />
                    <div className="-mt-4 justify-end flex">
                        <Link className="hover:underline cursor-pointer" to='/auth/reset'>Forgot password?</Link>
                    </div>

                    <button className="application-button auth-btn" disabled={submitButtonDisabled} onClick={handleSubmission}>
                        Login
                    </button>
                    <hr className="my-6" />
                    <GoogleButton className="m-auto mb-4" disabled={submitButtonDisabled} onClickHandler={handleGoogleSignIn} />
                </form>
            </div>
            <div className="auth-cards">
                <p>
                    Don't have an account?{" "}
                    <span className="underline">
                        <Link to="/auth/signup">Sign up</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;