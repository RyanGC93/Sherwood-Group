import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.registerUser({ email, firstname, lastname, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <div className="login-container" >
	      <form onSubmit={handleSubmit}>
	        <ul>
	          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
	        <div>
            <div className="header-container">
              <h1>Sign Up</h1>
					  </div>
					  <div>first</div>
	          <input
              className="form-control"
              placeholder="Firstname"
	            type="text"
	            value={firstname}
	            onChange={(e) => setFirstname(e.target.value)}
	            required
	          />
	        </div>          
	        <div> last
	          <input
              className="form-control"
              placeholder="Last Name"
	            type="text"
	            value={lastname}
	            onChange={(e) => setLastname(e.target.value)}
	            required
	          />
	        </div>
	        <div> email
	          <input
              className="form-control"
              placeholder="Email"
	            type="text"
	            value={email}
	            onChange={(e) => setEmail(e.target.value)}
	            required
	          />
	        </div>
	        <div> username
	          <input
              className="form-control"
              placeholder="Username"
	            type="text"
	            value={username}
	            onChange={(e) => setUsername(e.target.value)}
	            required
	          />
	        </div>
	        <div> pass
	          <input
              className="form-control"
              placeholder="Password"              
	            type="password"
	            value={password}
	            onChange={(e) => setPassword(e.target.value)}
	            required
	          />
	        </div>
	        <div>
				<div>conf pass</div>
	          <input
              className="form-control"
              placeholder="Confirm Password"
	            type="password"
	            value={confirmPassword}
	            onChange={(e) => setConfirmPassword(e.target.value)}
	            required
	          />
          </div>
          <div>
	          <button type="submit">Sign Up</button>
          </div>
	      </form>
	    </div>  
    </>
  );
}

export default SignupFormPage;
