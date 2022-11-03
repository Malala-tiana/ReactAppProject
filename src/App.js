import React from 'react'
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import Welcome from './components/Welcome'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isSignedUp: false
    }
  }

  authChangeCallBack = () => {
    this.setState({ isSignedUp: true})
  }
  showWelcome = () => {
    if (this.state.isSignedUp){
      return <Welcome />
    } else{
      return <SignUp userAuthChanged={this.authChangeCallBack}/>
    }
  }

  render(){
    return <div className="App">{this.showWelcome()}</div> 
  }
}

export default App;
