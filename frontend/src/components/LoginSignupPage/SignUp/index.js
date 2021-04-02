import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import "./SignupForm.css";

const SignUp = ({ setToggle }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [advance, setAdvance] = useState(false);
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.registerUser({
					email,
					firstname,
					lastname,
					username,
					password,
				})
			).catch((res) => {
				if (res.data && res.data.errors) setErrors(res.data.errors);
			});
		}
		return setErrors([
			"Confirm Password field must be the same as the Password field",
		]);
	};

	const firstFormHandler = () => {
		if (password === confirmPassword) {
			setAdvance(true)
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}

	}



	return (
		<>
			<form onSubmit={handleSubmit}>
				{!advance && (
					<>
						<div className="login-title header">Sign up</div>
						<ul>
							{errors.map((error, idx) => (
								<li key={idx}>{error}</li>
							))}
						</ul>

						<div className="input-group">
							<label className="input-group sub-header">Email</label>
							<input
								className="form-input-field"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div className="input-group">
							<label className="input-group sub-header">Password</label>
							<input
								className="form-input-field"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="input-group">
							<label className="input-group sub-header">
								Confirm Password
							</label>
							<input
								className="form-input-field"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
						<div>
							<div className="login-btn" onClick={firstFormHandler}>Next Page</div>

							<div className='login-toggle' onClick={() => setToggle(false)}>
								Already Have An Account?
							</div>
						</div>
					</>
				)}
				{advance && (
					<>
				<div className="login-spacer"></div>		
				<div className="input-group">
				<label className="input-group sub-header">
				First Name
				</label>
				<input
				className="form-input-field"
				type="text"
				value={firstname}
				onChange={(e) => setFirstname(e.target.value)}
				required
				/>
				</div>
				<div className="input-group">
				<label className="input-group sub-header">
				Last name
				</label>
				<input
				className="form-input-field"
						type="text"
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
						required
						/>
				</div>
				<div className="input-group">
				<label className="input-group sub-header">
            Username
			</label>
			<input
			className="form-input-field"
			type="text"
			value={username}
			onChange={(e) => setUsername(e.target.value)}
			required
			/>
						</div>
						<div className="login-btns-container">
							<div className="login-btn" onClick={()=> setAdvance(false)}>Go Back</div>
							<div className="login-btn" onClick={handleSubmit}>Sign Up</div>

						</div>
		</>	
	)}
			</form>
		</>
	);
};

export default SignUp;
