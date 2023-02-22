import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

import Globe from '../../assets/world.png'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink
                    to='/'
                    className='side-nav-link'
                    activeclass='active'
                >
                    <p>Home</p>
                </NavLink>
               
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink
                        to='/questions'
                        className='side-nav-link'
                        activeclass='active'
                        style={{ paddingLeft: "14px" }}
                    >
                        <img src={Globe} alt="Globe" className='globe-icon' />
                        <p style={{ paddingLeft: "10px" }}>Questions</p>
                    </NavLink>
                    <NavLink
                        to="/tags"
                        className='side-nav-link'
                        activeclass='active'
                        style={{ paddingLeft: "40px" }}
                    >
                        <p>Tags</p>
                    </NavLink>
                    <NavLink
                        to="/users"
                        className='side-nav-link'
                        activeclass='active'
                        style={{ paddingLeft: "40px" }}
                    >
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar