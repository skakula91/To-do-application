import axios from "axios"
import AuthenticationService from '../components/todo/AuthenticationService.js'

class TodoService
{
    getAllTodos(username)
    {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get(`http://localhost:8080/users/${username}/todos`);
    }

    deletTodoById(username,id)
    {
        AuthenticationService.setupAxiosInterceptors();
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    }

    retrieveTodo(username, id)
    {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`);
    }

    updateTodo(username, id, todo)
    {
        AuthenticationService.setupAxiosInterceptors();
        return axios.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
    }

    createTodo(username, todo)
    {
        AuthenticationService.setupAxiosInterceptors();
        return axios.post(`http://localhost:8080/users/${username}/todos`, todo);
    }
}

export default new TodoService();