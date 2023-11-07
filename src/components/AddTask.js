import React, { Component } from 'react'

class AddTask extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <form className="form-inline justify-content-between">
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Task Name" />
                        </div>

                        <button type="button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTask