import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        taskAdd: ''
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
            alert('Vui lòng nhập task!');
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

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <form className="form-inline justify-content-between">
                        <div className="form-group mb-2">
                            <input
                                value={this.state.title}
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
                </div>
            </div>
        )
    }
}

export default AddTask