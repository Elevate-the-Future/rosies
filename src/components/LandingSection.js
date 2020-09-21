import React, { Component } from "react";

import BackgroundImage from '../../public/assets/images/restaurant/1900x1200/img_1.jpg';

export default class LandingSection extends Component {
  render() {
    return (
      <>
        <section
          className="pb_cover_v1 cover-bg-black cover-bg-opacity-4 text-center"
          // backgroundImage: `url(${BackgroundImage})`
          style={{backgroundColor: `#500805`, filter: 'contrast(88%)', minHeight: '100vh'}}
          id="section-home"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9  order-md-1">
                <h1 className="heading mb-3" style={{fontFamily: "'Dancing Script', 'cursive'"}}>Good Vibes. Better Food</h1>
                <div className="sub-heading">
                  <p className="mb-5">
                    Rosie’s is a pop-up concept offering a feel-good breakfast as well as a small but worth-well lunch selection.
                  </p>
                </div>
                <p>
                  <a
                    href="https://www.toasttab.com/rosies/v3"
                    target="_blank"
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
