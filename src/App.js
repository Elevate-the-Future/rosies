import React, { Component } from 'react'

import NavBar from './components/Navbar';
import LandingSection from './components/LandingSection';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <NavBar/>
        <LandingSection/>
      </>
    )
  }
}

export default App
