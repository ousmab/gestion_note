import React, { Component } from 'react';
import login from "../images/login.png"


class Login extends Component {



    render() {
        

        return (
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={login} alt="..." /></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">Oups ! ressource introuvable !</h1>  
                     
        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;
