import React, { Component } from 'react';
//import { BrowserRouter, Route, Link } from 'react-router-dom'
import firebase from '../firebase/firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email :'',
            password :''
        };
    }

    handleChange(e){
        console.log(e.target);
        
        this.setState({
            [e.target.name]: e.target.value
        });

        //Esto seria email = al valor de email o password = al valor de password,
        //por que el name de taeget del imput es email y pasword y del los mismos se toma el valor 
    }

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user);
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
  render() {
    return (
        <div className="col-md-6">
        <form>
       <div className="form-group">
        <label >Email address</label>
        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       </div>
        <div className="form-group">
       <label >Password</label>
       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
       </div>
       <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
  </form>
  
  </div>
    )
  }
}


export default Login;
