import React, { Component } from 'react'
import { withRouter } from "react-router";

class Home extends Component {
    render() {
        const { match, location, history } = this.props;
        console.log('match =>', match);
        console.log('location =>', location);
        console.log('history =>', history);
        return (
            <>
                <h1>Home page</h1>
            </>
        )
    }
}

export default withRouter(Home)
