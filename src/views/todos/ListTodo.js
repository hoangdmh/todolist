import React, { Component } from 'react'
import listTask from '../../mocks/listTask';
import TitleTask from '../../components/TitleTask';
import AddTask from '../../components/AddTask';

class ListTodo extends Component {

    state = {
        listTask: listTask
    }

    render() {
        return (
            <>
                {/* TITLE : START */}
                <TitleTask />

                {/* ADD : TASK */}
                <AddTask />


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
                                                <button type="button" className="btn btn-danger">Delete</button>
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