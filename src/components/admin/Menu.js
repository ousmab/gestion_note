import React from 'react'
import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa'
import { RiFileEditFill } from 'react-icons/ri'
import { BsBookHalf } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { AiFillHome} from "react-icons/ai"

export default function Menu() {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Note Manager</div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                        <AiFillHome className="icons_size" />  Accueil
                    </a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FaChalkboardTeacher className="icons_size" /> classe</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FaUsers className="icons_size" /> Etudiant</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <BsBookHalf className="icons_size" /> Matières</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <RiFileEditFill className="icons_size"/>Examens</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <FiSettings className="icons_size" /> Paramétres</a>
                </div>
        </div>
    )
}
