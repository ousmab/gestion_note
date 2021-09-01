import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom"


import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from "./components/Error"
import Login from './components/Login';
import Dashboard from './components/Dashboard';

 class App extends Component {




  render() {
    return (

      <Router>
          
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route component={Error} />
                </Switch>
            <Footer />
      </Router>
        

    )
  }
}

export default App;



     
