import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import "./Navbar.css"
import Avater from "../avater/Avater"
import navlogo from "../../assets/logo-stackoverflow.png"
import search from "../../assets/search.svg"
import { setCurrentUser } from '../../actions/currentUser'


const Navbar = () => {

    var user = useSelector((state) => state.currectUserReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to="/" className="nav-item nav-image-box">
                    <img src={navlogo} alt="logo" className="nav-logo" />
                </Link>
                <Link className="nav-item nav-btn">About</Link>
                <Link className="nav-item nav-btn">Products</Link>
                <Link className="nav-item nav-btn">For Teams</Link>
                <form>
                    <input type="text" className='search-input' placeholder="Search.." />
                    <img src={search} className="search-logo" alt="search" />
                </form>
                {
                    !user ?
                        <Link to="/auth" className="nav-item nav-links" >Login</Link> :
                        <>
                            <Link to="/user" style={{ textDecoration: "none" }}>
                                <Avater
                                    backgroundColor="#0096FF"
                                    borderRadius="50%"
                                    textAlign="center"
                                    type='nav'
                                    fontSize='20px'
                                >{user?._doc?.name.charAt(0).toUpperCase()}</Avater>
                            </Link>
                            <Link ><button className="nav-item nav-links" onClick={handleLogout}>Logout</button></Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar