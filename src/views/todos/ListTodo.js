import React, { Component } from 'react'
import TitleTask from '../../components/TitleTask';
import AddTask from '../../components/AddTask';

import { toast } from 'react-toastify';

import listTask from '../../mocks/listTask';

class ListTodo extends Component {

    state = {
        // listTask: listTask
        listTask
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

    render() {
        // console.log('check state => ', this.state.listTask);
        let { listTask } = this.state;

        return (
            <>
                {/* TITLE : START */}
                <TitleTask />

                {/* ADD : TASK */}
                <AddTask
                    addNewTask={this.addNewTask}
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
                                                <button type="button" className="btn btn-warning me-2">Edit</button>
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