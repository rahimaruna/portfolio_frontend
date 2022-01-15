import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-5">
                                                    <div className="about-img">
                                                        <img src="assets/img/hero-bg1.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><span className="title-s">Name: </span> <span>Rahima Akter</span></p>
                                                        <p><span className="title-s">Profile: </span> <span>Software Quality Assurance</span></p>
                                                        <p><span className="title-s">Email: </span> <span>rahima230.r@gmail.com</span></p>
                                                        <p><span className="title-s">Phone: </span> <span>01931702911</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-mf">
                                                <p className="title-s">Skill</p>
                                                <span>HTML</span> <span className="pull-right">85%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span>CSS3</span> <span className="pull-right">75%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span>Python</span> <span className="pull-right">80%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span>ML</span> <span className="pull-right">60%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">
                                                        About me
                                                    </h5>
                                                </div>
                                                <p className="lead">
                                                    My name is Rahima Akter, 24, graduated as a Software Engineer, looking for a full time job I can do SQA and Research Associate. I’m skilled with Python, ML and SQA, and I am trying to learn other SQA tools, step by step. Have one brother and an younger sister, brother is a Textile Engineer and my sister is still studying in college, so it is quite funny that I, as a girl, decided for software engineering.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
