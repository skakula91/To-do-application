import axios from 'axios'

class AuthenticationService
{

    executeBasicAuthenticationService(username, password)
    {
        let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password);
        return axios.get('http://localhost:8080/basicauth',{
            headers:{
                authorization:basicAuthHeader
            }
        })
    }

    registerSuccessfullLogin(username, password)
    {
        sessionStorage.setItem('authenticatedUser',username);
        let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password)
        sessionStorage.setItem('token',basicAuthHeader);
        this.setupAxiosInterceptors();
    }

    retrieveUsername()
    {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null)
            return '';

        return user;
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }
    
    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null)
            return false;

        return true;
    }


    setupAxiosInterceptors()
    {
       //  window.btoa is base64 encoding
        let basicAuthHeader = sessionStorage.getItem('token');
        axios.interceptors.request.use(
            (config) =>
            {
                if(this.isUserLoggedIn)
                {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }

        )
    }
}

export default new AuthenticationService()