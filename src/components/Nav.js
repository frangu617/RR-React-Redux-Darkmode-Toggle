import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

function Nav() {
const background = useSelector(state => state.color5)
    return (
        <div className="Nav" style={{background}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
