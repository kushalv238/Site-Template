import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import processMessage from "../../../utility/processMessage";

import GoogleButton from "./../../util-components/GoogleButton";
import toast from "react-hot-toast";

function Signup() {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	const { signUp, googleSignIn } = useUserAuth()

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
			setSubmitButtonDisabled(false);
		}
	}

	const handleSubmission = async (e) => {
		e.preventDefault();

		if (!values.name || !values.email || !values.password) {
			toast.error("Fill all fields");
			return;
		}
		if (values.password !== values.passwordConfirm) {
			toast.error("Confirm password is not same as password.");
			return;
		}

		setSubmitButtonDisabled(true);

		try {
			await signUp(values.name, values.email, values.password)
			toast.success('Successfully signed up!')
			navigate("/")
		} catch (err) {
			toast.error(processMessage(err.message))
		} finally {
			setSubmitButtonDisabled(false);
		}
	};

	return (
		<div className="auth-wrapper">
			<div className="auth-cards">
				<div className="flex flex-wrap items-start">
					<p className="heading">Welcome</p>
				</div>

				<form onSubmit={handleSubmission} className="auth-form flex flex-col gap-3">
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

					<button className="application-button auth-btn mt-1" onClick={e => handleSubmission(e)} disabled={submitButtonDisabled}>
						Signup
					</button>

					<hr className="my-4" />
					<GoogleButton className="m-auto mb-2" disabled={submitButtonDisabled} onClickHandler={handleGoogleSignIn} />
				</form>
			</div>

			<div className="auth-cards">
				<p>
					Already have an account?{" "}
					<span className="underline">
						<Link to="/auth/login">Login</Link>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Signup;