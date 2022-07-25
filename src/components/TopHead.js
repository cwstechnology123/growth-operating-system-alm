import React from 'react'
import { Link } from "react-router-dom";

export default function TopHead() {
    return (
        <div className="nav-header">
            <Link to="/" className="brand-logo">
                <img src="images/svg/Logo.svg" alt="logo" />
            </Link>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line" /><span className="line" /><span className="line" />
                </div>
            </div>
        </div>
    )
}
