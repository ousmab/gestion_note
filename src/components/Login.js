import React, { Component } from 'react';
import login from "../images/login.png"


class Login extends Component {



    render() {
        

        return (
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={login} alt="..." /></div>
                    <div className="col-md-6">
                        <form >
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                Erreur de connexion vérifier vos identifiants (mot de passe et email)
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-3 col-form-label">Mot de passe</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="password" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="offset-3 col-sm-9">
                                    <input type="submit" value="Connexion" className="btn btn-primary" />

                                </div>
                            </div>

                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;
