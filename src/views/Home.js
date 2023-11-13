import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Home extends Component {
    handleDeleteUser = (user) => {
        // console.log('User', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.createUserRedux()
    }

    render() {
        // console.log('prop from home component ', this.props);
        // const { match, location, history } = this.props;
        // console.log('match =>', match);
        // console.log('location =>', location);
        // console.log('history =>', history);

        let listUser = this.props.dataRedux
        return (
            <>
                <h1>Home page</h1>
                {listUser && listUser.length > 0 ?
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                <span onClick={() => this.handleDeleteUser(item)}> X</span>
                            </div>
                        )
                    })
                    :
                    <p>Data empty</p>
                }
                <button
                    onClick={() => this.handleCreateUser()}
                    type='button' className='btn btn-primary mt-3'
                >Add new</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
