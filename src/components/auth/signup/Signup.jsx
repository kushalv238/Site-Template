import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import removeFirebasePrefix from './../../../utility/removeFirebasePrefix'

import signupImg from './../../../resources/images/signup.jpg'

// import { useDispatch } from "react-redux";
// import { setUserInfo, removeUserInfo } from "./../../../store/auth";

// import axios from "axios"

import GoogleButton from "react-google-button";

function Signup() {
    const navigate = useNavigate();

    // const dispatch = useDispatch();

    const [values, setValues] = useState({
        name: "",
        email: "",
        mobileNo: "",
        password: "",
        passwordConfirm: "",
        image: ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const { signUp, googleSignIn } = useUserAuth()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValues(values => ({ ...values, image: file }));
    };

    const handleUpload = () => {
        // Here, you can implement the logic to upload the image
        // For simplicity, let's just log the file information
        if (values.image) {
            console.log("Selected Image:", values.image);
            // You can perform additional tasks like uploading the image to a server here
        } else {
            console.log("No image selected");
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()

        try {
            await googleSignIn()
            navigate("/")
        } catch (err) {
            setErrorMsg(removeFirebasePrefix(err.message))
            setSubmitButtonDisabled(false)
        }
    }

    const handleSubmission = async (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.password) {
            setErrorMsg("Fill all fields");
            return;
        }
        if (values.password !== values.passwordConfirm) {
            setErrorMsg("Confirm password is not matching with password.");
            return;
        }

        setErrorMsg("");
        setSubmitButtonDisabled(true);

        try {
            await signUp(values.name, values.email, values.pass)
            navigate("/")
        } catch (err) {
            setErrorMsg(removeFirebasePrefix(err.message))
            setSubmitButtonDisabled(false);
        }

        // try {
        //     const formData = new FormData();
        //     for (const key in values) {
        //         formData.append(key, values[key]);
        //     }

        //     const response = await fetch('http://localhost:5000/api/users/signup', {
        //         method: 'POST',
        //         body: formData,
        //     });

        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log('Signup successful:', data);
        //         // dispatch(setUserInfo(data))

        //     } else {
        //         console.error('Signup failed:', response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error during signup:', error);
        // }
    };

    return (
        <div className="flex flex-wrap w-full mx-36">
            <div className="w-1/2 flex items-center">
                <img className="w-3/4" src={signupImg} alt="" />
            </div>

            <div className="w-1/2 flex flex-wrap gap-2 px-5">
                <div className="auth-wrapper">
                    <div className="flex flex-wrap items-start">
                        <p className="heading">Welcome</p>
                        <p className="font-thin text-gray-400">Register yourself as voter to cast votes to your preferred candidate</p>
                    </div>

                    <form onSubmit={handleSubmission} className="flex flex-col gap-3">
                        <input
                            label="Name"
                            placeholder="Enter your name"
                            value={values.name}
                            autoFocus
                            onChange={(event) =>
                                setValues((prev) => ({ ...prev, name: event.target.value }))
                            }
                        />
                        <input
                            label="Email"
                            value={values.email}
                            placeholder="Enter email address"
                            onChange={(event) =>
                                setValues((prev) => ({ ...prev, email: event.target.value }))
                            }
                        />
                        <input
                            label="phone"
                            // type="number"
                            value={values.mobileNo}
                            placeholder="Enter phone number"
                            onChange={(event) =>
                                setValues((prev) => ({ ...prev, mobileNo: event.target.value }))
                            }
                        />

                        <input
                            label="Password"
                            type="password"
                            value={values.password}
                            placeholder="Enter password"
                            onChange={(event) =>
                                setValues((prev) => ({ ...prev, password: event.target.value }))
                            }
                        />

                        <input
                            label="Password"
                            type="password"
                            value={values.passwordConfirm}
                            placeholder="Confirm password"
                            onChange={(event) =>
                                setValues((prev) => ({ ...prev, passwordConfirm: event.target.value }))
                            }
                        />

                        <p className="text-sm mt-2">Upload a photo of you voters id so we can verify you later on</p>
                        <input type="file" onChange={handleFileChange} />


                        <b className="error">{errorMsg}</b>
                        <button className="application-button auth-btn mt-1" onClick={e => handleSubmission(e)} disabled={submitButtonDisabled}>
                            Signup
                        </button>
                        <hr className="my-4" />
                        <GoogleButton className="m-auto mb-2" onClick={handleGoogleSignIn} />
                    </form>
                </div>

                <div className="auth-wrapper">
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/auth/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;