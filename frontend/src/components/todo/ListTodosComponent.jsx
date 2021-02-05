import React, {Component} from 'react'
import moment from "moment";
import TodoService from '../../api/TodoService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component
{
    constructor(props)
    {
        super(props);
 
        this.state = {
            todos:[],
            message:''
        }
    }

    componentDidMount()
    {
        this.refreshTodo();
    }

    refreshTodo()
    {
        let username = AuthenticationService.retrieveUsername();
        TodoService.getAllTodos(username)
        .then(
            response => // console.log(response.data);
            this.setState({todos:response.data})
        );  
    }

    deleteTodoClicked=(id)=>
    {
        let username = AuthenticationService.retrieveUsername();
        TodoService.deletTodoById(username,id)
        .then(response => {
            this.setState({message:`deleted successfully record with ${id}`})
            this.refreshTodo()
        })
        .catch(error => console.log(error));
    }

    addToClicked=()=>
    {
        this.props.history.push("/todos/-1");
    }

    updateTodoClicked=(id)=>
    {
        this.props.history.push(`/todos/${id}`)
    //     let username = AuthenticationService.retrieveUsername();
    //     TodoService.deletTodoById(username,id)
    //     .then(response => {
    //         this.setState({message:`deleted successfully record with ${id}`})
    //         this.refreshTodo()
    //     })
    //     .catch(error => console.log(error));
    // 
    }

    render()
    {
        return( 
            <div>
                <h1>List Todos</h1>
                <div className="alert alert-success">{this.state.message}</div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>isCompleted</th>
                                <th>targetDate</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* iterate over list objects  */}
                        {
                            this.state.todos.map(
                                todo => 
                                <tr key ={todo.id.toString()}>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            ) 
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addToClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent