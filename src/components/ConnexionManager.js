import axios  from 'axios'

class ConnexionManager{

    constructor(){
        this.status = false

    }

    static getStatus(){
        
        /*ici on doit faire une requete  au serveur pour vérifier la connectivité 
        on return true ou false selon que l'utilisateur est connecté ou pas*/ 
        axios.get('/connection_status')
        .then((resp)=>{
            console.log(resp.data.status)
        })
        .catch(err=>{
            console.log(err)
        })
        
        return true
    }

    static getUserConnected(){

    }

}

export default ConnexionManager;