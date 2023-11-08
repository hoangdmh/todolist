import React, { Component } from 'react'
import { toast } from 'react-toastify';

class AddTask extends Component {
    state = {
        taskAdd: '',
        currentTask: {}
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleAddTask = () => {
        if (!this.state.taskAdd) {
            toast.error("Missing task");
            return;
        }

        let data = {
            id: Math.floor(Math.random() * 100),
            task: this.state.taskAdd
        }
        // console.log('handleAddTask', data);
        this.props.addNewTask(data);

        this.setState({
            taskAdd: '',
        })
    }

    handleOnChangeEditTodo = (e) => {
        let copyCurrentTask = { ...this.props.currentTask };
        copyCurrentTask.task = e.target.value;

        this.setState({
            currentTask: copyCurrentTask
        })
    }

    componentWillReceiveProps(props) {
        this.setState({ currentTask: props.currentTask })
    }

    handleUpdateTask = () => {
        let data = this.state.currentTask;
        this.props.handleEditTodo(data);
        console.log('currentTask =>', this.state.currentTask);
    }

    render() {
        let isEmptyObj = Object.keys(this.props.currentTask).length === 0;

        return (
            <div className="row">
                <div className="col-4">
                    {isEmptyObj === true ?
                        <form className="form-inline justify-content-between">
                            <div className="form-group mb-2">
                                <input
                                    value={this.state.taskAdd}
                                    name="taskAdd"
                                    onChange={(event) => this.handleChange(event)}
                                    type="text" className="form-control" placeholder="Task Name"
                                />
                            </div>

                            <button
                                onClick={() => this.handleAddTask()}
                                type="button" className="btn btn-primary"
                            >Submit</button>
                        </form>

                        :

                        <form className="form-inline justify-content-between">
                            <div className="form-group mb-2">
                                <input
                                    value={this.state.currentTask.task}
                                    onChange={(e) => this.handleOnChangeEditTodo(e)}
                                    name="editTask"
                                    type="text" className="form-control" placeholder="Task Name"
                                />
                            </div>

                            <button
                                onClick={() => this.handleUpdateTask()}
                                type="button" className="btn btn-primary"
                            >Save</button>
                        </form>
                    }
                </div>
            </div>
        )
    }
}

export default AddTask