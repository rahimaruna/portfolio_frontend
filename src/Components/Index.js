import React, { Component } from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import CoverPhoto from './CoverPhoto'
import Navbar from './Navbar'

export default class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CoverPhoto />
                <AboutMe />
                <ContactMe />
            </>
        )
    }
}
