import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

class App extends Component{
  render(){

    const name = 'Peter Smith';

      return (
        <Fragment>
          <Navbar title="GitHub Finder" icon="fab fa-github"/>
          <h1>Hello React World {name.toUpperCase()}</h1>
        </Fragment>
      );
  }
}

export default App;
