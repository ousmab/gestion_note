import { Redirect, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
import axios from "axios"

export default function ProtectedRoute(props) {
    const {
        
        dontGoWhenConnected,
        homeWhenConnected:Home,
        component:Component,

        ...rest} = props

        
    {/**

        
        
        doneGoWhenConnected : ne redirige pas sur cette route si on est connecté
        homeWhenConnected   : le component si on est connecté elle permettra de 
        rediriger vers ce component si on essai d'acceder à une route quo a un doneGoWhenConnected à true
        component           : cest le composant sur lequel on doit rediriger
        ...rest             : c'est sont les autres props (path, exact etc..)

    */}

          let [user, setUser] = useContext(AuthContext)

           async function getUser(){
              let use = await axios.get('user');
              if(!user ){
                  setUser(use.data.user)
              }
           }
           

           

           getUser()

           return (
      
            ! dontGoWhenConnected ? 
            (
                <Route 
                    {...rest}
                    render={(props)=>{
                            return user ? <Component  { ...props } /> : <Redirect  to={{pathname:"/", state: {from : props.location} }} /> 
                        }
                    }
                />
            ) : 
            (
                <Route 
                    {...rest}
                    render={(props)=>{
                        return user ? <Dashboard {...props} /> : <Component  {...props} />
                        } 
                    }
                />
            )
    
           
        )


       

      
       
       
    
   
}

