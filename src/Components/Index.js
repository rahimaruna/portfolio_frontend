import React, { Component } from 'react'
import CoverPhoto from './CoverPhoto'
import Navbar from './Navbar'

export default class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CoverPhoto />
            </>
        )
    }
}
