import React from 'react'
import  "./style.css"
import { Link, useLocation } from 'react-router-dom'
function NavBar() {
    const {pathname}=useLocation();
  
  return (
    <div className='navbar'>
        <h1>Staff</h1>
        <div className='link'>
            <Link to="/"> <div className={`navbar-element ${pathname==="/"?"active":""}`}>Home</div></Link>
            <Link to="/dashboard"> <div className={`navbar-element ${pathname==="/dashboard"?"active":""}`}>DashBoard</div></Link>
            <Link to="/contact"> <div className={`navbar-element ${pathname==="/contact"?"active":""}`}>Contact</div></Link>
        </div>
    </div>
  )
}

export default NavBar