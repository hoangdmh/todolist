import React from 'react';

class StateComponent extends React.Component {
    state = {
        name: 'Le Nam',
        address: 'Da nang'
    };

    
    handleChange = (event) => {
        this.setState({name: event.target.value});
    }


    render(){        
        
        return(
            <>
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
                <h3>Hi {this.state.name} {this.state['address']}</h3>
            </>
        )
    }
}

export default StateComponent;