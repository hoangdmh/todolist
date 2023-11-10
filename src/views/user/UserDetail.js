import React, { Component } from 'react'
import { withRouter } from "react-router";
import axiosInstance from '../../plugins/axios'
import Loading from '../Loading/Loading';

class UserDetail extends Component {
    state = {
        user: {},
        isLoading: false,
    }

    async componentDidMount() {
        this.setState({
            isLoading: true
        })
        let id = this.props.match.params.id;

        try {
            var result = await axiosInstance.get(`/users/${id}`);
            this.setState({
                isLoading: false
            })
            // console.log('result =>', result);

            if (result.data && result.status === 200) {
                this.setState({
                    user: result.data.data,
                    ok: true
                })
            }

        } catch (error) {
            this.setState({
                isLoading: false
            })
            return {
                ok: false,
                // error: error.message
            }
        }
    }

    render() {
        let { user, isLoading } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        // console.log(isEmptyObj);
        return (
            <>
                {isEmptyObj === false &&
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={user.avatar} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name + ' ' + user.last_name}</h5>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                }
                <Loading isLoading={isLoading} />
            </>
        )
    }
}

export default withRouter(UserDetail)