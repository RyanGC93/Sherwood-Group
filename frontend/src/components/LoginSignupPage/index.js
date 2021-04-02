import React from 'react';
import SignIn from './SignIn'
import './styles.css'
import Login from './Login'
const LoginSignupPage = () => {
    return (
        <>
            <img className="login-background" src='https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' />
            <Login className='login' />

        </>
    )
}


export default LoginSignupPage