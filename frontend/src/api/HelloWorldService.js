import axios from "axios"

class HelloWorldService
{
    executeHelloWorldService()
    {
       return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldServiceException()
    {
       return axios.get('http://localhost:8080/test-exceptions');
    }
}
export default new HelloWorldService()