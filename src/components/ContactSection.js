import React, { Component } from 'react'

export default class ContactSection extends Component {
    render() {
        return (
            <>
                <section className="pb_section bg-light" id="section-contact" style={{paddingTop: '5em', paddingBottom: '5em'}}>
                    <div className="container-fluid">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-10 text-center">
                                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Instagram</h2>
                                <button role="button" onClick={() => {window.open('https://www.instagram.com/liamwong/', '_blank')}} className="btn btn-ins btn-outline-primary" style={{cursor: 'pointer'}}><i className="fab fa-instagram pr-1"></i> Instagram</button>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{marginLeft: '2.5rem', marginRight: '2.5rem'}}>
                            <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/90946541_237586727292799_7276894977137781969_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=HnXzFemCfe8AX-SDNjh&oh=db4741d94dd0019918342eea8a3382c6&oe=5F7F2439" alt="Image caption here" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/94115258_925669814569822_4514363865641333693_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=AEupS0kEKoIAX89xrhC&oh=9310df0bcc3e2e59b5dd44dc45a84365&oe=5F7E145C" alt="Image caption here" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92697027_2556014988005297_6928661870143167172_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=VQefNsfsysoAX_cfH3j&oh=19fd8460e90b15d251a0f178c8b02489&oe=5F7D8F3D" alt="Image caption here" />
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91083241_3132398746793685_6682983941027713226_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=38l9Cx7nqEoAX9tl4-K&oh=c7b4e32a7a377facdad0000a30d8ae82&oe=5F7E54C6" alt="Image caption here" />
                            </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5" style={{paddingTop: '9em'}}>
                            <div className="col-md-10 text-center">
                                <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Hours</h2>
                                <h3 className="mb-4">Monday - Friday: 9AM - 9PM</h3>
                                <h3 className="mb-4">Saturday - Sunday: 10AM - 5PM</h3>
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5" style={{paddingTop: '3em'}}>
                            <div className="col-md-10 text-center">
                                <h3 className="mb-4">Phone Number: (888)-888-8888</h3>
                                <h3 className="mb-4">Email Address: fakeemail@protonmail.com</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
