import React, { Component } from 'react'

export default class ContactSection extends Component {
    render() {
        return (
            <>
                <section className="pb_section bg-light" id="section-contact">
                    <div className="container-fluid">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-10 text-center">
                                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Contact</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-10 text-center">
                                <h3 className="mb-4">Thurs-Mon</h3>
                                <h3 className="mb-4"><b>All Day Breakfast</b> 9AM-3PM</h3>
                                <h3 className="mb-4">Pre-Order Lunch Online 11AM-3PM</h3>
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5" style={{paddingTop: '3em'}}>
                            <div className="col-md-10 text-center">
                                <h3 className="mb-4">439 NW 4th Ave, Miami, FL 33128</h3>
                                <h3 className="mb-4">(305) 454-9065</h3>
                                <h3 className="mb-4">hello@rosiesmia.com</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
