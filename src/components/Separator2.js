import React, { Component } from 'react'

import backgroundImage from '../../public/assets/images/restaurant/1900x1200/img_3.JPG';

export default class Separator2 extends Component {
    render() {
        return (
            <>
                <section className="pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4" style={{backgroundImage: `url(${backgroundImage})`}} id="section-home">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-9  order-md-1">
                                <h2 className="heading mb-3">Good Food, Good Taste</h2>
                                <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
