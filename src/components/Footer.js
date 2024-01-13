import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
const background = useSelector(state => state.color5)
    return (
        <div className="Footer" style={{ background }}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
