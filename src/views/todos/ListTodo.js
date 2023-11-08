import React, { Component } from 'react'
import TitleTask from '../../components/TitleTask';
import AddTask from '../../components/AddTask';

import { toast } from 'react-toastify';

// import listTask from '../../mocks/listTask';

class ListTodo extends Component {

    state = {
        // listTask: listTask
        listTask: [],
        currentTask: {}
    }

    addNewTask = (task) => {
        // console.log('Task nhan dc =>', task);
        this.setState({
            listTask: [...this.state.listTask, task]
        })

        toast.success("Add Task Success!");
    }

    handleDeleteTask = (taskId) => {
        // console.log('handleDeleteTask', taskId);
        let currentTask = this.state.listTask;
        currentTask = currentTask.filter((item) => {
            return item.id !== taskId
        })

        this.setState({
            listTask: currentTask
        })

        toast.success("Delete Task Success!");
    }

    handleEditTodo = (todo) => {
        // console.log('handleEditTodo', todo);
        let { listTask, currentTask } = this.state;
        let isEmptyObj = Object.keys(todo).length === 0;

        //Save
        if (isEmptyObj === false && todo.id === currentTask.id) {
            let listTaskCopy = [...listTask]
            let objIndex = listTaskCopy.findIndex((obj => obj.id === todo.id));

            listTaskCopy[objIndex].task = todo.task;

            this.setState({
                listTask: listTaskCopy,
                currentTask: {}
            })

            toast.success("Update Task Success!");
            return;
        }

        //Edit
        this.setState({
            currentTask: todo
        })
    }

    componentDidMount() {
        let tasks = localStorage.getItem('tasks');
        // console.log('tasks', tasks);
        if (tasks !== null) {
            this.setState({
                listTask: JSON.parse(tasks)
            })
        } else {
            this.setState({
                listTask: []
            })
        }
    }

    componentDidUpdate() {
        let tasksString = JSON.stringify(this.state.listTask);
        localStorage.setItem('tasks', tasksString);
    }

    render() {
        // console.log('check state => ', this.state.listTask);
        let { listTask, currentTask } = this.state;

        return (
            <>
                {/* TITLE : START */}
                <TitleTask />

                {/* ADD : TASK */}
                <AddTask
                    addNewTask={this.addNewTask}
                    currentTask={currentTask}
                    handleEditTodo={this.handleEditTodo}
                />


                {/* LIST : START */}
                <div className="panel panel-success mt-4">
                    <div className="panel-heading">List Task</div>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">#</th>
                                <th>Task</th>
                                <th style={{ width: '160px' }}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listTask && listTask.length > 0 &&
                                listTask.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>{item.task}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.handleEditTodo(item)}
                                                    type="button" className="btn btn-warning me-2"
                                                >Edit</button>
                                                <button
                                                    onClick={() => this.handleDeleteTask(item.id)}
                                                    type="button" className="btn btn-danger"
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}

export default ListTodo