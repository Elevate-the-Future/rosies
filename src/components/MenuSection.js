import React, { Component } from 'react'

export default class AboutSection extends Component {
    render() {
        return (
            <>
                <section className="pb_section" id="section-menu">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-5">
                        <div className="row">
                            <div className="col">
                            <p><img src="assets/images/menu.png" alt="Instant Image" className="img-fluid"/></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 pl-lg-5 pl-lg-0">
                            <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Menu</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        )
    }
}
