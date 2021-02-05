class AuthenticationService
{
    registerSuccessfullLogin(username, password)
    {
        sessionStorage.setItem('authenticatedUser',username);
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
}

export default new AuthenticationService()