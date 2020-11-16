import React, { Component} from 'react';
import Lvroom from './LvroomComponent';
import Bedroom from './BedroomComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    info: state.info
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
            <Route exact path ='/livingroom' component={() => <Lvroom info={this.props.info}/>} />
            <Route exact path ='/bedroom' component={() => <Bedroom info={this.props.info}/>} />
            <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps)(Main));
