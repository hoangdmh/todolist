import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Home extends Component {
    render() {
        console.log('prop from home component ', this.props);
        const { match, location, history } = this.props;
        // console.log('match =>', match);
        // console.log('location =>', location);
        // console.log('history =>', history);
        return (
            <>
                <h1>Home page</h1>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}
export default connect(mapStateToProps)(withRouter(Home))
