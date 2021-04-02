import React,{useState} from 'react';
import SignUp from './SignUp'
import './styles.css'
import Login from './Login'

const LoginSignupPage = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <img className="login-background" src='https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' />
            <div className='loginSignup-container' >
                {toggle ? (
                    <SignUp setToggle={setToggle} />
                ): (
                <Login setToggle={setToggle} />
                )}

            </div>
        </>
    )
}


export default LoginSignupPage