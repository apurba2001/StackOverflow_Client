import './Auth.css'
import { useState } from 'react'

import logo from '../../assets/stack-overflow.png'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    return (
        <section className='auth-section'>
            <div className='auth-container'>
                {!isSignup &&
                    <img src={logo} alt="stack overflow" className='login-logo' />
                }
                <form>
                    <label htmlFor='username'>
                        <h4>Email</h4>
                        <input type="email" id='username' name='username' />
                    </label>
                    <label htmlFor='password'>
                        <div>
                            <h4>Password</h4>
                            <h4>forgot password</h4>
                        </div>
                        <input type="password" id='password'
                            name='password'
                        />
                    </label>
                    <button type='submit' className='auth-btn'>
                        {
                            isSignup ? "Sign up" : "Log in"
                        }
                    </button>
                </form>
                <p>
                    {
                        isSignup ?
                            "already have an account" :
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