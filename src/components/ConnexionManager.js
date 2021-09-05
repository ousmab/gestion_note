import axios  from 'axios'

class ConnexionManager{

    constructor(){
        this.status = false

    }

    static getStatus(){
        
        /*ici on doit faire une requete  au serveur pour vérifier la connectivité 
        on return true ou false selon que l'utilisateur est connecté ou pas*/ 
        if (localStorage.getItem('token')){
            return true
        }
        return false
    }

    static getUserConnected(){

    }

}

export default ConnexionManager;