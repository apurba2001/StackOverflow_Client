import { Link } from 'react-router-dom'
import "./Navbar.css"
import Avater from "../avater/Avater"

import navlogo from "../../assets/logo-stackoverflow.png"
import search from "../../assets/search.svg"

const Navbar = () => {

    var user = null

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
                            <Link to="/user" style={{textDecoration: "none"}}>
                                <Avater 
                                    backgroundColor="green"
                                    borderRadius="50%"
                                    py="7"
                                    px="9.5"
                                    textAlign="center"
                                >M</Avater>
                            </Link>
                            <Link ><button className="nav-item nav-links">Logout</button></Link>
                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar