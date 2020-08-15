import React, { Component } from 'react'

export default class TeamSection extends Component {
    render() {
        return (
            <>
                <section className="pb_section bg-light" id="section-team">
                    <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 text-center">
                        <h2 className="mb-4 text-uppercase pb_letter-spacing-2">The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-deck">
                        <div className="card border-0">
                            <img className="card-img-top" src="assets/images/persons/person_1.jpg" alt="Image caption here" />
                            <div className="card-body pb_p-40">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img className="card-img-top" src="assets/images/persons/person_2.jpg" alt="Image caption here" />
                            <div className="card-body pb_p-40">
                            <h4 className="card-title">Jane Doe</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img className="card-img-top" src="assets/images/persons/person_3.jpg" alt="Image caption here" />
                            <div className="card-body pb_p-40">
                            <h4 className="card-title">John Smith</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        )
    }
}
