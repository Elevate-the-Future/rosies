import React, { Component } from 'react'

export default class GallerySection extends Component {
    render() {
        return (
            <>
            <section className="pb_section" id="section-gallery">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                    <div className="col-md-10 text-center">
                        <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Gallery</h2>
                        <button role="button" onClick={() => {window.open('https://www.instagram.com/liamwong/', '_blank')}} className="btn btn-ins btn-outline-primary" style={{cursor: 'pointer'}}><i className="fab fa-instagram pr-1"></i> Instagram</button>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="card-columns">
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_4.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_4.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/800x975/img_1.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/800x975/img_1.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_1.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_1.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/800x975/img_2.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/800x975/img_2.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_2.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_2.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_6.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_6.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_5.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_5.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/800x975/img_3.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/800x975/img_3.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        <div className="card border-0 mb-4">
                            <a href="assets/images/restaurant/1900x1200/img_3.jpg" className="pb_hover-zoom image-popup">
                            <img className="img-fluid" src="assets/images/restaurant/1900x1200/img_3.jpg" alt="Image caption here" />
                            <i className="ion-ios-search-strong icon" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
