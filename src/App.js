import React, { Component } from 'react'
import { Head } from 'react-static'

import NavBar from './components/Navbar';
import LandingSection from './components/LandingSection';
import MenuSection from './components/MenuSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Rosie's</title>
        </Head>

        <NavBar/>
        <LandingSection/>
        <MenuSection/>
        <GallerySection/>
        <TeamSection/>
        <ContactSection/>
        <Footer/>
      </>
    )
  }
}

export default App
