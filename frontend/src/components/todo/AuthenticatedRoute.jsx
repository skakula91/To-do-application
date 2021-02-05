import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Route, Redirect} from 'react-router-dom'

class AuthenticatedRoute extends Component
{
    render()
    {
        if(AuthenticationService.isUserLoggedIn())
        {
            // <Route path = {this.props.path} Component= {this.path.Component}/>
           return <Route {...this.props}></Route>
        }
        else{
            return <Redirect to="/login"></Redirect>
        }
    }
}

export default AuthenticatedRoute