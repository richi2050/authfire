import React, { Component } from 'react';
import firebase from './firebase/firebase';
import Login from './components/Login';
import Home from './components/Home';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : {},
    }
  }

  componentDidMount(){
    this.authListener();
  }
  authListener(){
    firebase.auth().onAuthStateChanged( (user) => {
      //console.log(user);
      if(user){
        this.setState({
          user
        });
        localStorage.setItem('user', user.uid);
      }else{
        this.setState({
          user: null
        });
        localStorage.removeItem('user');

      }
    });
  }


  condition(){
    if(this.state.user){
       return (<Home />);
    }else{
       return (<Login/>);
    }
  }

  render() {
    return (
      <div className="App">
        {this.condition()}
      </div>
    );
  }
}

export default App;
