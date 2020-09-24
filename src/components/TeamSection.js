import React, { Component } from "react";

export default class TeamSection extends Component {
  render() {
    return (
      <>
        <section className="pb_section bg-light" id="section-team">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center">
                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                  The Team
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="card-deck">
                <div className="card border-0">
                  {/* <img className="card-img-top" src="assets/images/persons/person_1.jpg" alt="Image caption here" /> */}
                  <div className="card-body pb_p-40">
                    <h4 className="card-title">Akino West and Jamila Ross</h4>
                    <p className="card-text">
                      Akino and Jamila first started Copper Door Properties in
                      2017 as a gateway to a life on entrepreneurship. They
                      established the corporation while maintaining full time
                      jobs as hospitality professionals, together the couple has
                      30 years of hospitality, specific food &amp; beverage
                      experience.
                    </p>
                    <p className="card-text">
                      The initial intent of Copper Door Properties was to
                      establish vacation rental properties in under-developed
                      areas in order to promote cultural tourism and more local
                      perspective when it comes to what Miami can offer its
                      tourists. The Copper Door Properties portfolio currently
                      include The Copper Door B&amp;B and Rosie’s Pop-Up. For
                      press and interviews, click{" "}
                      <a
                        href="https://www.copperdoorbnb.com/press"
                        target="_blank"
                      >
                        here
                      </a>
                      !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
