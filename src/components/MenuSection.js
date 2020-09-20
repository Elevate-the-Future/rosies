import React, { Component } from "react";

export default class AboutSection extends Component {
  render() {
    return (
      <>
        <section className="pb_section" id="section-menu">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                  Menu
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul className="nav justify-content-center pb_tab_v1">
                  <li className="nav-item">
                    <a
                      className="nav-link active p-3"
                      data-toggle="list"
                      href="#savory"
                      role="tab"
                    >
                      Savory
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link p-3"
                      data-toggle="list"
                      href="#sweet"
                      role="tab"
                    >
                      Sweet
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link p-3"
                      data-toggle="list"
                      href="#sides"
                      role="tab"
                    >
                      Sides
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link p-3"
                      data-toggle="list"
                      href="#drinks"
                      role="tab"
                    >
                      Drinks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link p-3"
                      data-toggle="list"
                      href="#lunch"
                      role="tab"
                    >
                      Lunch 11am-3pm
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="savory"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Soft Scramble Toast
                                </h3>
                                <p className="mb-0">
                                  Roasted mushrooms, garlic chip. Parm, multi-grain.
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>14.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Fish & Grits
                                </h3>
                                <p className="mb-0">
                                  Cornmeal crusted fish, tomato gravy, collard green kimchi.
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>15.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Shrimp & Grits
                                </h3>
                                <p className="mb-0">
                                  Cajun shrimps, smoked sausage, roasted tomato.
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>16.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Chicken & Waffle
                                </h3>
                                <p className="mb-0">
                                  Hot chicken, pickles
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>14.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Chicken & Waffle + Biscuit
                                </h3>
                                <p className="mb-0">
                                  Hot chicken, pickles
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>15.00
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="sweet" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  French Toast
                                </h3>
                                <p className="mb-0">
                                  Orange creme anglaise, berry, pistachio
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>12.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Chia Seed Coco Pudding
                                </h3>
                                <p className="mb-0">
                                 Pineapple, apricot, crunchy oats
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>6.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Chocolate Croissant
                                </h3>
                                <p className="mb-0">
                                  Guava glaze
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.00
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="sides" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Buttermilk Biscuits
                                </h3>
                                <p className="mb-0">
                                  Lorem ipsum
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>4.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Smoked Sausage
                                </h3>
                                <p className="mb-0">
                                  Lorem ipsum
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>6.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Cheddar Grits
                                </h3>
                                <p className="mb-0">
                                  Lorem ipsum
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>4.00
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="drinks" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Local Coffee
                                </h3>
                                <p className="mb-0">
                                  Argyle Coffee Roasters, Brazilian
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Hot Tea
                                </h3>
                                <p className="mb-0">
                                  English Breakfast - Moroccan mint, Raspberry Hibiscus
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  House Jamaica
                                </h3>
                                <p className="mb-0">
                                  Lime
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Lemonade
                                </h3>
                                <p className="mb-0">
                                  Seasonal fruit
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.00
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="lunch" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Chicky Sandwich
                                </h3>
                                <p className="mb-0">
                                  Hot chicken, lemon ailoi, pickles, spiced yucca chips + a drink
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>15.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Fish Sandwich
                                </h3>
                                <p className="mb-0">
                                  Hot fish, slaw, pickles, spiced yucca chips + a drink
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>16.00
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <a
                  href="https://pos.toasttab.com/"
                  target="_blank"
                  role="button"
                  className="btn smoothscroll pb_outline-dark rounded-2 btn-xl pb_font-17 pb_letter-spacing-2 p-3"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
