import React, { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "./../../../config/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import processMessage from "../../../utility/processFirebaseMessage";

function ResetPass() {
	const [values, setValues] = useState({
		email: "",
	});

	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	async function handleResetPass(e) {
		e.preventDefault();

		if (!values.email) {
			toast.error("Enter an email")
			return
		}

		setSubmitButtonDisabled(true)
		
		await sendPasswordResetEmail(auth, values.email).then(() => {
			toast.success("Check your inbox for further instructions.")
		}).catch(err => {
			toast.error(processMessage(err.message))
		}).finally(() => {
			setSubmitButtonDisabled(false)
		})

	};
	return (
		<div className="auth-wrapper">
			<div className="auth-card">
				<p className="heading">Reset Password</p>

				<form onSubmit={handleResetPass} className="auth-form flex flex-col gap-3">
					<input
						label="Email"
						type="email"
						autoFocus
						value={values.email}
						onChange={(event) =>
							setValues((prev) => ({ ...prev, email: event.target.value }))
						}
						placeholder="Enter email address"
					/>

					<div className="-mt-2 justify-end flex">
						<Link className="hover:underline cursor-pointer" to='/auth/login'>Login</Link>
					</div>

					<button className="application-button" disabled={submitButtonDisabled} onClick={e => handleResetPass(e)}>
						Rest Password
					</button>

				</form>
			</div>
			<div className="auth-card">
				<p>
					Don't have an account?{" "}
					<span className="underline">
						<Link to="/auth/register">Sign up</Link>
					</span>
				</p>
			</div>
		</div>
	);
}

export default ResetPass;