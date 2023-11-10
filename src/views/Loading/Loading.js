import React, { Component } from 'react'
import './Loading.scss';

class Loading extends Component {
    render() {
        let isLoading = this.props.isLoading;
        console.log('isLoading', isLoading);

        return (
            <>
                {isLoading === true &&
                    <div className="loading show">
                        <div style={{ width: '100%', height: '100%' }} className="lds-dual-ring">
                            <div></div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default Loading