import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul style={{ display: "flex", justifyContent: "space-between", listStyle: "none", cursor: "pointer" }}>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/description">description</Link>
                <Link to="/contact">contact</Link>
            </ul>

        </nav>
    )
}
