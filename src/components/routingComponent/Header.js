import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <NavLink exact to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/service">Services</NavLink>
        </>
    )
}

export default Header