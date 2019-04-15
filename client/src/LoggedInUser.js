import React, { Component } from 'react';

class LoggedInUser extends Component{
    constructor(props) {
        super(props);
        this.state={
            loggedIn: false,
        };
    }

    render(){
        if(!this.props.logInfo.loggedIn){
            return(<div>
                <h1>NOT LOGGED IN!!!</h1>
            </div>);
        }

        else {
            return (
                <div>
                    <h1>Welcome {this.props.logInfo.username}</h1>
                </div>
            );
        }
    }
}

export default LoggedInUser;