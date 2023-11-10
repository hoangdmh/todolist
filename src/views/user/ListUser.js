import React, { Component } from 'react'
import axiosInstance from '../../plugins/axios'
import { withRouter } from "react-router";

class ListUser extends Component {
    state = {
        listUser: []
    }

    componentDidMount() {
        this.getListUser();
    }

    getListUser = async () => {
        //console.log('getListUser');
        try {
            var result = await axiosInstance.get(`/users?page=1`);
            // console.log('result =>', result.data);

            if (result.data && result.status === 200) {
                this.setState({
                    listUser: result.data.data
                })
            }

        } catch (error) {
            return {
                ok: false,
                // error: error.message
            }
        }
    }

    handleRedirectUser = (user) => {
        // console.log('props', this.props);
        // console.log('user', user);
        this.props.history.push({ pathname: `/user/${user.id}` })
    }

    render() {
        let { listUser } = this.state;
        return (
            <>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser && listUser.length > 0 &&
                                listUser.map((user, index) => {
                                    return (
                                        <tr key={user.id} onClick={() => this.handleRedirectUser(user)}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <div className='avatar'>
                                                    <img src={user.avatar} alt="" style={{ width: 100 }} className='rounded-circle' />
                                                </div>
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

export default withRouter(ListUser)