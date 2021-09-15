import React, { Component } from 'react';
import NoteManager from './components/NoteManager';
import AuthContext from './context/AuthContext';


 class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       user : null
    }
  }
  
  setUser=(userConnected)=>{
      this.setState({user:userConnected})
  }



  

 
  

  render() {
    return (
      <AuthContext.Provider value={[this.state.user, this.setUser]} >
          <NoteManager/>
      </AuthContext.Provider>
      
    )
  }
}

export default App;



     
