import './Auth.css'
import { useState } from 'react'
import About from './About'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../../actions/auth'
import logo from '../../assets/stack-overflow.png'


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert('Enter email and password')
        }

        if (isSignup) {
            if (!name) {
                alert('Enter name to continue')
            }
            dispatch(signup({ name, email, password }, navigate))
        }else{
            dispatch(login({ email, password }, navigate))
        }
        console.log(name, email, password)
    }

    return (
        <section className='auth-section'>
            {isSignup && <About />}
            <div className='auth-container2'>
                {!isSignup &&
                    <img src={logo} alt="stack overflow" className='login-logo' />
                }
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display name</h4>
                                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />

                            </label>
                        )
                    }
                    <label htmlFor='username'>
                        <h4>Email</h4>
                        <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 >Password</h4>
                            {
                                !isSignup && <p className='forget-password' style={{ color: "#007ac6", fontSize: "13px" }}>Forgot password?</p>
                            }
                        </div>
                        <input type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                        {isSignup && <p style={{ color: "#0666767", fontSize: "13px", color: "#666767", paddingTop: "5px" }} w>Password must contain at least eight<br />
                            characters, including at least 1 letter 1 <br /> ber.
                        </p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id="check" style={{ width: "13px", paddingBottom: "15px" }} />
                                <p style={{ fontSize: "12px", marginTop: "15px", paddingLeft: "10px" }}>Opt-in to receive occasional,<br /> product updates,
                                    user reserch invitations,<br />
                                    company announcements, and digests.
                                </p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>
                        {isSignup ? "Sign up" : "Log in"}
                    </button>
                    {
                        isSignup && (
                            <p style={{ color: "#0666767", fontSize: "12px", marginTop: "6px" }}>
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