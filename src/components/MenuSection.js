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
                      href="#sandwiches"
                      role="tab"
                    >
                      Sandwiches
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
                                  Shrimp &amp; Grits
                                </h3>
                                <p className="mb-0">
                                  Cajun shrimp, smoked sausage, roasted tomato
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
                                  Fish &amp; Grits
                                </h3>
                                <p className="mb-0">
                                  cornmeal crusted fish, collard green kimchi, tomato gravy cheddar grits
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
                                  Breakfast Plate
                                </h3>
                                <p className="mb-0">
                                  Grits, Smoked Sausage, 2 eggs
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
                                  Chicken &amp; Waffles
                                </h3>
                                <p className="mb-0">
                                  crispy hot chicken &amp; vanilla waffles
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
                                  Chicken &amp; Biscuits
                                </h3>
                                <p className="mb-0">
                                  crispy hot chicken &amp; 2 buttermilk biscuits
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
                                  Soft Scramble Toast
                                </h3>
                                <p className="mb-0">
                                  Soft scrambled egg, multi-grain toast, Parm, herbs, garlic
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>14.00
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
                                  Chocolate &amp; Guava Crossiant
                                </h3>
                                <p className="mb-0">

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
                                  Waffles
                                </h3>
                                <p className="mb-0">
                                  vanilla spiced waffles + brown butter/spicy maple
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>5.00
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Buttermilk Biscuit
                                </h3>
                                <p className="mb-0">

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
                                  French Toast
                                </h3>
                                <p className="mb-0">
                                  orange anglaise, berry, pistachio +brown butter/spicy maple
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
                                  pineapple, apricot, crunchy oat
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>6.00
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
                                  Egg
                                </h3>
                                <p className="mb-0">
                                  2 eggs
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
                                  Crispy Hot Chicken
                                </h3>
                                <p className="mb-0">

                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>8.00
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
                                  Seared smoked sausage link
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
                  <div className="tab-pane fade" id="sandwiches" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Crispy Fish Sandwich
                                </h3>
                                <p className="mb-0">
                                  brioche bun, slaw, spiced yucca chips
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
                                  Chicky Sandwich
                                </h3>
                                <p className="mb-0">
                                  crispy hot chicken, B&amp;B pickles, lemon aioli, buffalo sauzzz, spiced yucca chips
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
                  <div className="tab-pane fade" id="drinks" role="tabpanel">
                    <div className="row">
                      <div className="col-md">
                        <ul className="list-unstyled pb_food-menu">
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  OJ
                                </h3>
                                <p className="mb-0">
                                  
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
                                  Chilled Jamaica
                                </h3>
                                <p className="mb-0">

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
                                  Seasonal Lemonade
                                </h3>
                                <p className="mb-0">

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
                                  Tea
                                </h3>
                                <p className="mb-0">
                                  English Breakfast, Green Mint, or Raspberry Hibiscus
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
                                  Latte
                                </h3>
                                <p className="mb-0">
                                  
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
                                  Espresso
                                </h3>
                                <p className="mb-0">
                                  Double shot
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>2.50
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Cortadito
                                </h3>
                                <p className="mb-0">
                                  Double shot espresso, whipped sugar + steamed milk (a bit less than a cappuccino)
                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>3.50
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-lg-10">
                                <h3 className="pb_font-18 font-weight-bold">
                                  Americano
                                </h3>
                                <p className="mb-0">
                                  Argyle Coffee Roasters, Houndstooth Blend
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
                                  Water
                                </h3>
                                <p className="mb-0">

                                </p>
                              </div>
                              <div className="col-lg-2">
                                <span className="price">
                                  <sup>$</sup>2.00
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
                  href="https://www.toasttab.com/rosies"
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
