import './Auth.css'
import { useState } from 'react'
import About from './About'

import logo from '../../assets/stack-overflow.png'


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    return (
        <section className='auth-section'>
            { isSignup && <About/> }
            <div className='auth-container2'>
                {!isSignup &&
                    <img src={logo} alt="stack overflow" className='login-logo' />
                }
                <form>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display name</h4>
                                <input type="text" id="name" name="name" />

                            </label>
                        )
                    }
                    <label htmlFor='username'>
                        <h4>Email</h4>
                        <input type="email" id='username' name='username' />
                    </label>
                    <label htmlFor='password'>
                        <div style={{display: "flex", justifyContent: "space-between" }}>
                            <h4 >Password</h4>
                            {
                                !isSignup && <p className='forget-password' style={{ color: "#007ac6", fontSize: "13px" }}>Forgot password?</p>
                            }
                        </div>
                        <input type="password" id='password' name='password' />
                        {isSignup && <p style={{ color: "#0666767", fontSize: "13px", color: "#666767", paddingTop: "5px" }}w>Password must contain at least eight<br />
                            characters, including at least 1 letter 1 <br/> ber.
                        </p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id="check" style={{ width: "13px", paddingBottom: "15px" }} />
                                <p style={{ fontSize: "12px", marginTop: "15px", paddingLeft:"10px" }}>Opt-in to receive occasional,<br /> product updates,
                                    user reserch invitations,<br />
                                    company announcements, and digests.
                                </p>

                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>
                        { isSignup ? "Sign up" : "Log in" }
                    </button>
                    {
                        isSignup && (
                            <p style={{ color: "#0666767", fontSize: "12px", marginTop: "6px"}}>
                                By clicking "Sign up", you agree to our
                                <span style={{ color: "#007ac6" }}> terms of <br />service</span>
                                , <span style={{ color: "#007ac6" }}>privacy privacy</span> and
                                <span style={{ color: "#007ac6" }}> cookie policy</span>
                            </p>
                        )
                    }
                </form>
                <p className='switch-auth'>
                    {
                        isSignup ?
                            "Already have an account? " :
                            "Don't have an account? "
                    }
                    <button
                        type='button'
                        className='handle-switch-btn'
                        onClick={handleSwitch}
                    >
                        {
                            isSignup ? "Log in" : "Sign up"
                        }
                    </button>
                </p>
            </div>
        </section>


    )
}

export default Auth