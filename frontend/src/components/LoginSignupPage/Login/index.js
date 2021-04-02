import React from 'react';
import './styles.css'
import PortfolioIcons from '../PortfolioIcons'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../../store/session';

const Login= ({setToggle}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const onSubmit = async (e) => {
    if(e)e.preventDefault();
    setErrors([]);
    const user = {
      credential,
      password,
    };
    console.log(user)
    const res = await dispatch(login(user));
    if (res.data && res.data.errors) setErrors(res.data.errors);
  };
  const handleDemo = async () => {


    const user = {credential: "Demo", password: "password"}
    console.log(user)
    const res = await dispatch(login(user));
    if (res.data && res.data.errors) setErrors(res.data.errors);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        {
          errors.length > 0 && (
            <ul className="errors-list">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          )
        }
        <div className='login-title header' >Login</div>
        <div className="input-group">
          <label className="input-group-label sub-header">
            Username or Email
          </label>
          <input required className="form-input-field" type="text" value={credential} onChange={e => setCredential(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="input-group-label sub-header">
            Password
          </label>
          <input required className="form-input-field" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="login-btns-container">
          <div className="login-btn" onClick={onSubmit}>Login</div>
          <div  className="login-btn" onClick={handleDemo} >Demo Login</div>
        </div>
        <div className="">
        </div>
        <PortfolioIcons />
        <div className='login-toggle' onClick={()=> setToggle(true)}>Don't Have an Account?</div>
      </form>
    </>
  );
};

export default Login