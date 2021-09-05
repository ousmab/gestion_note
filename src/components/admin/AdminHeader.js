import React from 'react'
import "./admin.css"
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineUser, AiFillHome} from "react-icons/ai"
import Menu from "./Menu"
import AdminMainContainer from "./AdminMainContainer"
export default function AdminHeader() {

    

    return (
        <div className="d-flex" id="wrapper">
           
            <Menu />
            <div id="page-content-wrapper">

                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn" id="sidebarToggle"><GiHamburgerMenu className="icons_size" /> </button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Mon profil <AiOutlineUser className="icons_size" /> 
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <AdminMainContainer />
            </div>
        </div>
    )
}
