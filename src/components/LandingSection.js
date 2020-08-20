import React, { Component } from "react";

import BackgroundImage from '../../public/assets/images/restaurant/1900x1200/img_1.jpg';

export default class LandingSection extends Component {
  render() {
    return (
      <>
        <section
          className="pb_cover_v1 cover-bg-black cover-bg-opacity-4 text-center"
          style={{backgroundImage: `url(${BackgroundImage})`, filter: 'contrast(88%)', minHeight: '100vh'}}
          id="section-home"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9  order-md-1">
                <h1 className="heading mb-3" style={{fontFamily: "'Dancing Script', 'cursive'"}}>Rosie's</h1>
                <div className="sub-heading">
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <p>
                  <a
                    href="#section-menu"
                    role="button"
                    className="btn smoothscroll pb_outline-light rounded-2 btn-xl pb_font-17 pb_letter-spacing-2 p-3"
                  >
                    Order Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
