import React, { useState, useEffect } from 'react'

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
    let status = ConnexionManager.getStatus()
   
    return (
      
        ! dontGoWhenConnected ? 
        (
            <Route 
                {...rest}
                render={(props)=>{
                        return status ? <Component {...props} /> : <Redirect  to={{pathname:"/", state: {from : props.location} }} /> 
                    }
                }
            />
        ) : 
        (
            <Route 
                {...rest}
                render={(props)=>{
                    return status ? <Dashboard {...props} /> : <Component {...props} />
                    } 
                }
            />
        )

       
    )
}

