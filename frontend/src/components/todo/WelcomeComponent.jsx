import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/HelloWorldService.js'

class WelcomeComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {message:''}
    }

    retrieveWelcomeMessage=()=>{
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(error => this.handleError(error));
         HelloWorldService.executeHelloWorldServiceException()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error));
    }

    handleSuccessfulResponse=(response)=>
    {
        this.setState({message:response.data});
    }

    handleError=(error)=>
    {
        console.log(error.response);

        let errorMessage = '';

        if(error.message)
        {
            errorMessage += error.message
        }

        if(error.response && error.response.data)
        {
            errorMessage += error.message
        }
        this.setState({message:errorMessage});
    }

    render()
    {
       return  <>
           <h1>Welcome</h1>
           <div className="container">
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
            </div>
            <div className="container">
                click here to get customized welcome message.
                <button onClick={this.retrieveWelcomeMessage}>Get welcome message</button>
            </div>
            <div className="container">
                {this.state.message}
            </div>
        </>
    }
}


export default WelcomeComponent