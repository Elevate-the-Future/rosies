import React, { Component } from "react";

import LogoImage from '../../public/assets/images/logo2.png'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light"
          style={{alignSelf: 'center'}}
          id="pb-navbar"
        >
          <div className="container">
            <a
              className="navbar-brand d-xl-none d-lg-none d-md-block d-sm-block"
              href="/"
            >
              <img
                src={
                  LogoImage
                }
                alt="Instant Logo"
                className="light"
              />
              <img
                src={
                  LogoImage
                }
                alt="Instant Logo"
                className="dark"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#probootstrap-navbar"
              aria-controls="probootstrap-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="ion-navicon" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="probootstrap-navbar"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase pb_letter-spacing-2"
                    href="#section-about"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase pb_letter-spacing-2"
                    href="#section-menu"
                  >
                    The Team
                  </a>
                </li>
                <li className="nav-item logo-center d-xl-block d-lg-block d-md-none d-sm-none d-none">
                  <a
                    className="nav-link text-uppercase pb_letter-spacing-2"
                    href="/"
                  >
                    <img
                      src={
                        LogoImage
                      }
                      style={{marginTop: '-1vh'}}
                      alt="Instant Logo"
                      className="light"
                    />
                    <img
                      src={
                        LogoImage
                      }
                      style={{marginTop: '-1vh'}}
                      alt="Instant Logo"
                      className="dark"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase pb_letter-spacing-2"
                    href="#section-gallery"
                  >
                    Order Now
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase pb_letter-spacing-2"
                    href="#section-events"
                  >
                    Hours
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
