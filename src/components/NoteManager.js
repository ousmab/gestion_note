import React, { Component } from 'react';
import {BrowserRouter as Router, Switch } from "react-router-dom"

import Main from './Main';
import Footer from './Footer'
import Error from "./Error"
import Login from './Login';
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute';
import AuthContext from '../context/AuthContext';



class NoteManager extends Component {



    
 
  


    render() {

       
        return (
            
                <Router>
                    <Switch>   
                        <ProtectedRoute 
                            exact
                            path="/" component={Main} 
                            dontGoWhenConnected={true} />
                            
                        <ProtectedRoute 
                            path="/dashboard" 
                            component={Dashboard} />

                        <ProtectedRoute 
                            path="/login" 
                            component={Login } 
                            dontGoWhenConnected={true} />

                        <ProtectedRoute 
                            component={Error} />
                    </Switch>
                    <Footer />
                </Router>
         
     
        );
    }
}


NoteManager.contextType = AuthContext

export default NoteManager;
