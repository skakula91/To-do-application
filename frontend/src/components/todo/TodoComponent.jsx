import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoService from '../../api/TodoService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return;
        }

        let username = AuthenticationService.retrieveUsername();
        let id = this.state.id;
        TodoService.retrieveTodo(username, id)
            .then(response =>
                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }))
    }

    onSubmit = (values) => {
        let username = AuthenticationService.retrieveUsername();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoService.createTodo(username,todo).then
                (
                    (response) => {
                        this.props.history.push('/todos');
                    }
                )
                .catch(error => console.log(console.error()))
        }
        else {
            TodoService.updateTodo(username, this.state.id, todo).then
                (
                    (response) => {
                        this.props.history.push('/todos');
                    }
                )
                .catch(error => console.log(console.error()))
        }
    }

    validate = (values) => {
        let errors = {};
        if (!values.description) {
            errors.description = 'Enter a Description';
        }
        else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 characters in Description';
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid date';
        }
        return errors;
    }

    render() {
        let description = this.state.description;
        let targetDate = this.state.targetDate;
        return <div>
            <h1>Todo Form</h1>
            <div className="container">
                {/* default values  */}
                <Formik
                    initialValues={{
                        description: description,
                        targetDate: targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {/* enable re-initalize form to re-render after component mount */}
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    }
}

export default TodoComponent