import React, { Component } from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import CoverPhoto from './CoverPhoto'
import Footer from './Footer'
import MyServices from './MyServices'
import Navbar from './Navbar'

export default class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CoverPhoto />
                <AboutMe />
                <MyServices />
                <ContactMe />
                <Footer />
            </>
        )
    }
}
