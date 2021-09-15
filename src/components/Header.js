import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">Note Manager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="py-4 collapse navbar-collapse" id="navbarSupportedContent">
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
