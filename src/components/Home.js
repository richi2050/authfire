import React, { Component } from 'react'
import firebase from '../firebase/firebase';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);

    }
    logout(e){
        firebase.auth().signOut();

    }
  render() {
    return (
      <div>
        Biienvenido

        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
