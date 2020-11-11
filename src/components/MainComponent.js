import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Lvroom from './LvroomComponent';
import {LVROOMTHINGS} from '../shared/lvroomthings';

class Main extends Component {
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

export default Main;
