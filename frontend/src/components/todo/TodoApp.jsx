import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import TodoComponent from './TodoComponent.jsx';

class TodoApp extends Component
{
    render()
    {
        return <div className="TodoApp">
            <Router>
                <>
                    <HeaderComponent></HeaderComponent>
                    {/*Switch ensure at any point only one route gets picked*/}
                    <Switch>
                        {/*default route*/}
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/logout" component={LogoutComponent}></Route>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent></FooterComponent>
                </>
            </Router>
            {/* <LoginComponent></LoginComponent> */}
            {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    }
}




// function ShowInvalidCredentials(props)
// {
//     if(props.hasLoginFailed)
//     {
//         return <div>Invalid credentials</div>
//     }
//     return null
// }

// function ShowSuccessMessage(props)
// {
//     if(props.showSuccessMessage){
//         return <div>Login successful</div>
//     }
//     return null
// }

export default TodoApp