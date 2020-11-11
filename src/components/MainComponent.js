import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Lvroom from './LvroomComponent';
import {LVROOMTHINGS} from '../shared/lvroomthings';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lvroomthings: LVROOMTHINGS
    }
  }

  render() {
    const HomePage = () => {
        return(
            <Home 
            />
        );
      }
  

    return (

      <div className="App">
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">SMART HOME</NavbarBrand>
          </div>
        </Navbar> */}
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path ='/livingroom' component={() => <Lvroom lvroomthings={this.state.lvroomthings}/>} />\
            <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default Main;
