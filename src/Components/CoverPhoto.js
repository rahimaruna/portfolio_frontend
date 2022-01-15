import React, { Component } from 'react'

export default class CoverPhoto extends Component {
    render() {
        return (
            <div id="hero" class="hero route bg-image" style={{backgroundImage: "url(assets/img/hero-bg2.jpg)"}}>
                <div class="overlay-itro"></div>
                <div class="hero-content display-table">
                    <div class="table-cell">
                        <div class="container">
                            <p class="display-6 color-d">Hello, world!</p>
                            <h1 class="hero-title mb-4">I am Rahima Akter</h1>
                            <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                            {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
