import React from 'react';

class MyForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        description: '',
        flavor: '',
        isCheck: true
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
        console.log(this.state);
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>First name:</label><br />
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        name="firstName"
                        onChange={(event) => this.handleChange(event)}
                    /><br />
                    
                    <label>Last name:</label><br />
                    <input 
                        type="text" 
                        name="lastName"
                        value={this.state.lastName} 
                        onChange={(event) => this.handleChange(event)}
                    /><br /><br />

                    <textarea 
                        type="text" 
                        name="description"
                        value={this.state.description} 
                        onChange={(event) => this.handleChange(event)}
                    ></textarea>
                    <br />

                    <label>Pick your favorite flavor:<br />
                        <select 
                            value={this.state.flavor}
                            name='flavor'
                            onChange={(event) => this.handleChange(event)}
                        >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <br />

                    <label>Is going:
                    <input
                        name="isCheck"
                        type="checkbox"
                        checked={this.state.isCheck}
                        onChange={(event) => this.handleChange(event)} 
                    />
                    </label>


                    <br />
                    <input type="submit" value="Submit" />

                    <br /><br />
                </form> 
            </>
        )
    }
}

export default MyForm