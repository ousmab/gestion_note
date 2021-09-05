import React, { useState } from 'react'

import { Redirect, Route } from "react-router-dom"
import ConnexionManager from './ConnexionManager'
import Dashboard from './Dashboard'


export default function ProtectedRoute({dontGoWhenConnected,homeWhenConnected:Home, component:Component, ...rest}) {

    {/**
        
        doneGoWhenConnected : ne redirige pas sur cette route si on est connecté
        homeWhenConnected   : le component si on est connecté elle permettra de 
        rediriger vers ce component si on essai d'acceder à une route quo a un doneGoWhenConnected à true
        component           : cest le composant sur lequel on doit rediriger
        ...rest             : c'est sont les autres props (path, exact etc..)
    */}

    

    return (
      
        <Route 
            {...rest}

            render={(props)=>{
                let status = ConnexionManager.getStatus() 
                console.log(status,"ddd")
            if (status){
                return dontGoWhenConnected ? <Dashboard {...props} /> : <Component {...props} /> 
            }else{
                return <Redirect  to={{pathname:"/", state: {from : props.location} }} />
            }
            
            }}
        >
        </Route> 

    )
}
