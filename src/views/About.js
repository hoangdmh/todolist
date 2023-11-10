import React, { Component } from 'react'

import Color from './HOC/Color'

class About extends Component {
    render() {
        return (
            <>
                <h1>About page</h1>
            </>
        )
    }
}

export default Color(About) 
