import React from 'react'
import {Link } from "react-router-dom"


export default function Error() {

    let img = process.env.PUBLIC_URL+"/not_found.png"

    return (
      
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={img} alt="..." /></div>
            <div className="col-md-6">
                <h1 className="display-5 fw-bolder">Oups ! ressource introuvable !</h1>  
                <Link to = "/" className="nav-link" >Révenir à l'accueil</Link> 
                  
            </div>
            
        </div>
    </div>
    )
}
