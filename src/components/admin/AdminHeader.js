import React from 'react'
import "./admin.css"
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineUser, AiFillHome} from "react-icons/ai"
import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa'
import { RiFileEditFill } from 'react-icons/ri'
import { BsBookHalf } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"


export default function AdminHeader() {

    let icons_size = 20

    return (
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Note Manager</div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                        <AiFillHome size={icons_size} />  Accueil
                    </a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FaChalkboardTeacher size={icons_size} /> classe</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FaUsers size={icons_size} /> Etudiant</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <BsBookHalf size={icons_size} /> Matières</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <RiFileEditFill size={icons_size}/>Examens</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FiSettings size={icons_size} /> Paramétres</a>
                </div>
            </div>

            <div id="page-content-wrapper">

                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn" id="sidebarToggle"><GiHamburgerMenu size={icons_size} /> </button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                {/*
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Mon profil <AiOutlineUser size={icons_size} /> 
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
                
                <div className="container-fluid">
                    <h1 className="mt-4">Accueil</h1>
                    
                </div>
            </div>
        </div>
    )
}
