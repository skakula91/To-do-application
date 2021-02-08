import axios from "axios"

class HelloWorldService
{
    executeHelloWorldService()
    {
       return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldServiceException()
    {
       let username = 'user';
       let password = 'password';

      //  window.btoa is base64 encoding
       let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password)
       return axios.get('http://localhost:8080/test-exceptions',
       {
          headers : {
             authorization: basicAuthHeader
          }
       });
    }
}
export default new HelloWorldService()