import React from 'react';

class AddTask extends React.Component {

    state = {
        task: '',
        price: '',
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: Math.random(),
            task: this.state.task,
            price: parseInt(this.state.price),
        }

        if (!this.state.task && !this.state.price) {
            alert('Nhap day du thong tin')
        }
        this.props.addNewTask(data);

        this.setState({
            task: '',
            price: '',
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Task:</label>
                    <input
                        type="text"
                        value={this.state.task}
                        name="task"
                        onChange={(event) => this.handleChange(event)}
                    /><br />

                    <label>price:</label>
                    <input
                        type="text"
                        name="price"
                        value={this.state.price}
                        onChange={(event) => this.handleChange(event)}
                    /><br />
                    <input type="submit" value="Submit" />
                    <br /><br /><br />
                </form>
            </>
        )
    }
}

export default AddTask