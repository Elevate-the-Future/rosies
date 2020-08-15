import React, { Component } from 'react'
import { Head } from 'react-static'

import NavBar from './components/Navbar';
import LandingSection from './components/LandingSection';
import MenuSection from './components/MenuSection';
import Separator from './components/Separator';
import TeamSection from './components/TeamSection';
import Separator2 from './components/Separator2';
import HoursSection from './components/HoursSection';
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
        <Separator/>
        <TeamSection/>
        <Separator2/>
        <HoursSection/>
        <Footer/>
      </>
    )
  }
}

export default App
