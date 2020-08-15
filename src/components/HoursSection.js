import React, { Component } from 'react'

export default class HoursSection extends Component {
    render() {
        return (
            <>
                <section className="pb_section" id="section-hours">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                        <div className="row">
                            <div className="col">
                            <p><img src="assets/images/restaurant/800x975/img_1.jpg" alt="Instant Image" className="img-fluid"/></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 pl-lg-5 pl-lg-0">
                            <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Hours</h2>
                            <hr/>
                            <h2>Monday - Friday: 9AM - 9PM</h2>
                            <br/>
                            <h2>Saturday - Sunday: 10AM - 6PM</h2>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        )
    }
}
