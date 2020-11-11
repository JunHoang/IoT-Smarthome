import React, { Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Lvroom from './components/LvroomComponent';
import {LVROOMTHINGS} from './shared/lvroomthings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lvroomthings: LVROOMTHINGS
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">SMART HOME</NavbarBrand>
          </div>
        </Navbar>
        <Lvroom lvroomthings={this.state.lvroomthings}/>
      </div>
    );
  }

}

export default App;
