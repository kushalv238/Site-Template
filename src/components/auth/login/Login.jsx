import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import GoogleButton from "./../../util-components/GoogleButton";

import processMessage from "../../../utility/processFirebaseMessage";

import toast from "react-hot-toast";

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
            <div className="auth-card">
                <div className="flex flex-wrap items-start">
                    <p className="heading">Login</p>
                </div>

                <form onSubmit={handleSubmission} className="auth-form flex flex-col gap-4">
                    <input
                        label="Email"
                        type="email"
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

                    <button className="application-button auth-btn" disabled={submitButtonDisabled} onClick={e => handleSubmission(e)}>
                        Login
                    </button>

                    <hr className="my-6" />
                    
                    <GoogleButton className="m-auto mb-4" disabled={submitButtonDisabled} onClickHandler={handleGoogleSignIn} />
                </form>
            </div>
            
            <div className="auth-card">
                <p>
                    New to Application?{" "}
                    <span className="underline">
                        <Link to="/auth/register">Create an account</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;