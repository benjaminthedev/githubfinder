import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component{
  render(){

    const name = 'Peter Smith';

      return (
        <Fragment>
          <h1>Hello React World {name.toUpperCase()}</h1>
        </Fragment>
      );
  }
}

export default App;
