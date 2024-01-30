import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import processMessage from "../../../utility/processFirebaseMessage";

import GoogleButton from "../../util-components/GoogleButton";

import toast from "react-hot-toast";

function Register() {
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
			<div className="auth-card">
				<div className="flex flex-wrap items-start">
					<p className="heading">Welcome</p>
				</div>

				<form onSubmit={handleSubmission} className="auth-form flex flex-col gap-4">
					<input
						label="Name"
						type="text"
						value={values.name}
						autoFocus
						onChange={(event) =>
							setValues((prev) => ({ ...prev, name: event.target.value }))
						}
						placeholder="Enter your name"
						/>
					<input
						label="Email"
						type="email"
						value={values.email}
						onChange={(event) =>
							setValues((prev) => ({ ...prev, email: event.target.value }))
						}
						placeholder="Enter email address"
					/>

					<input
						label="Password"
						type="password"
						value={values.password}
						onChange={(event) =>
							setValues((prev) => ({ ...prev, password: event.target.value }))
						}
						placeholder="Enter password"
					/>
					<input
						label="Confirm Password"
						type="password"
						value={values.passwordConfirm}
						onChange={(event) =>
							setValues((prev) => ({ ...prev, passwordConfirm: event.target.value }))
						}
						placeholder="Confirm password"
					/>

					<button className="application-button auth-btn mt-2" onClick={e => handleSubmission(e)} disabled={submitButtonDisabled}>
						Register
					</button>

					<hr className="my-6" />

					<GoogleButton className="m-auto mb-2" disabled={submitButtonDisabled} onClickHandler={handleGoogleSignIn} />
				</form>
			</div>

			<div className="auth-card">
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

export default Register;