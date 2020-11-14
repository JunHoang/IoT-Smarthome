import React, { Component} from 'react';
import Lvroom from './LvroomComponent';
import {LVROOMTHINGS} from '../shared/lvroomthings';
import Bedroom from './BedroomComponent';
import {BEDROOMTHINGS} from '../shared/bedroomthings';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    lvroomthings: state.lvroomthings,
    bedroomthings: state.bedroomthings
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   lvroomthings: LVROOMTHINGS,
    //   bedroomthings: BEDROOMTHINGS
    // }
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
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path ='/livingroom' component={() => <Lvroom lvroomthings={this.props.lvroomthings}/>} />
            <Route exact path ='/bedroom' component={() => <Bedroom bedroomthings={this.props.bedroomthings}/>} />
            <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps)(Main));
