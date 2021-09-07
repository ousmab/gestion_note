import axios from 'axios';
import React, { Component } from 'react';
import login from "../images/login.png"
import Header from './Header';

class Login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             formData : {},
             errorMessage : null,
             btnDisabled : false,
             btnMsg : "Se connecter"
        }
    }

    
    
    

    onSubmit=(event)=>{
        event.preventDefault()
        this.setState({btnDisabled: true, btnMsg : "Connexion...",errorMessage:null})
        axios.post('/admin/login', this.state.formData)
        .then((resp)=>{
            
            let message = null
            switch (resp.data.message) {
               
                case "SUCCESS":
                    localStorage.setItem('token', resp.data.token)
                    //this.setState({btnDisabled:false,btnMsg : "Se connecter"})
                    this.props.history.push('/dashboard')
                    break;

                default:
                    message = "vérifiez vos identiants de connexion (login / password)"
                    this.setState({btnDisabled:false,btnMsg : "Se connecter",errorMessage : message})
                    break;
               
            }
         
            
        })
        .catch(err=>{
            console.log(err)
        })


        /**/
    }

    onInputChange=e=>{
        let data = this.state.formData
        data[e.target.id] =e.target.value
        this.setState({formData: data})
    }

    render() {  
        const {username, password} = this.state.formData  
        return (
            <>
            <Header />
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={login} alt="..." /></div>
                    <div className="col-md-6">
                        <form onSubmit={this.onSubmit} >
                            {
                                this.state.errorMessage != null && (
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {this.state.errorMessage}
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                )
                            }
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Login</label>
                                <div className="col-sm-9">
                                    <input 
                                        onChange={this.onInputChange}
                                        value={username  }
                                        type="text"   
                                        className="form-control" 
                                        id="username"
                                         />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Mot de passe</label>
                                <div className="col-sm-9">
                                    <input 
                                        onChange={this.onInputChange} 
                                        value={password }
                                        type="password" 
                                        className="form-control" 
                                        id="password" />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="offset-3 col-sm-9">
                                    <input 
                                        onClick={this.onSubmit} 
                                        disabled ={this.state.btnDisabled}
                                        className="btn btn-primary" 
                                        type="submit" 
                                        value={this.state.btnMsg} 
                                        />

                                </div>
                            </div>

                        </form>
                    </div>
                    
                </div>
            </div>
            </>
        );
    }
}

export default Login;
