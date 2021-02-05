import React, {Component} from 'react'
import {withRouter, Link,} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component
{
    render()
    {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return(
            <header>
                <nav className="navbar navbar-expand-md navbark-dark bg-dark">
                    <div><a href= "/welcome" className="navbar-brand">TodoApplication</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome">Home</Link></li>} 
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
                <hr/>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)