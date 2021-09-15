import React, { useContext } from 'react'
import "./admin.css"
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineUser, AiFillHome} from "react-icons/ai"
import Menu from "./Menu"
import AdminMainContainer from "./AdminMainContainer"
import axios from 'axios'
import { useHistory } from 'react-router'
import AuthContext from '../../context/AuthContext'


export default function AdminHeader() {

    let history  = useHistory()
    let [user, setUser] = useContext(AuthContext)

    const onDeconnect=(e)=>{
        e.preventDefault()
        axios.get('/admin/logout')
        .then((resp)=>{
            if (resp.data.message=='SUCCESS'){
                
                setUser(null)
                history.push("/")
            }
        })
        
    }

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
                                        <button onClick={onDeconnect} className="dropdown-item">Se deconnecter</button>
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
