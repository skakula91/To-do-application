import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username :'sai',
            password :'',
            hasLoginFailed:false,
            showSuccessMessage:false
        }

        //this.handleUserNameChange = this.handleUserNameChange.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    //instead of creating a change event for each property
    // let write something more generic
    // handleUserNameChange(event){
    //     //console.log(event.target.value);
    //     this.setState({username:event.target.value});
    // }

    // handlePasswordChange(event){
    //     this.setState({password:event.target.value});
    // }

    handleChange(event)
    {
        this.setState({[event.target.name]:event.target.value})
    }

    loginClicked()
    {
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(
            ()=>{
                AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
                //redirect to welcome page
                this.props.history.push(`/welcome/${this.state.username}`)
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})
            }
        )
        .catch(
            () => {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            }
        )
        //if((this.state.username === 'sai' ||  this.state.username === 'shravya' )&& this.state.password === 'test')
        // {
        //     AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
        //     //redirect to welcome page
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})

        // }
        // else
        // {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }
            
        //console.log(this.state)
    }


    render()
    {
        return(
            <div>
                <h1>Login</h1>
                    <div className="container">
                        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                        <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowSuccessMessage> */}
                        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                        {this.state.showSuccessMessage && <div>Login successful</div>}
                        UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                        Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        <button className="btn btn-success " onClick={this.loginClicked}>Login</button>
                    </div>
            </div>
        );
    }
}

export default LoginComponent