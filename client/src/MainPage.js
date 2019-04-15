import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import newUser from "./newUser";
import LoggedInUser from "./LoggedInUser";

class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            logInfo:{
            username:null,
            loggedIn: false,

            }
        };
        this.userControl();
    }

    userControl = () =>{
      fetch('/users/')
          .then(response=>{return response.text()})
          .then(data=>this.setState({
              logInfo:{
               username: data,
               loggedIn: true
              }
          }))
    };

    userLoggedIn = (username, loggedIn) =>{
      this.setState({
          logInfo:{
              username: username,
              loggedIn: loggedIn,
          }
      })
    };

    logUserOut=()=> {
        console.log("Clicked Logout");
        fetch('/users/logout')
            .then(data => {
                return data.text()
            })
            .then(data => console.log(data))
            .then(() => this.userLoggedIn(undefined, false))
    };


    render(){
        return(
            <div>
                <Router>
                    <h1>Didier App</h1>
                    <Link className="linkSpacing" to='/'>Home</Link>
                    <Link className="linkSpacing" to='/login'>Sign In</Link>
                    <Link className="linkSpacing" to='/newuser'>Add User</Link>
                    <Link className="linkSpacing" to='/loggedIn'>User's Info</Link>
                    <Link className="linkSpacing" to='/loggedout' onClick={this.logUserOut}>Log Out</Link>
                    <Route exact path='/login' component={()=>{return <LogIn logInfo={this.state.logInfo} userLoggedIn={this.userLoggedIn}/>} }/>
                    <Route exact path='/newuser' component={newUser}/>
                    <Route exact path='/loggedIn' component={()=>{return <LoggedInUser logInfo={this.state.logInfo} userLoggedIn={this.userLoggedIn}/>} }/>
                    <Route exact path='/loggedout' component={()=>{return <LogOut/>} }/>
                </Router>
            </div>
        );
    }
}


export default MainPage;