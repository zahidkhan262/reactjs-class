import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <NavLink exact to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
        </>
    )
}

export default Header
