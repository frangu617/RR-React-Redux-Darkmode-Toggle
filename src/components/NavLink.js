import React from 'react'
import { useSelector } from 'react-redux'

function NavLink(props) {
const background = useSelector(state => state.color3)
    return (
        <div className="NavLink" style={{background}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
