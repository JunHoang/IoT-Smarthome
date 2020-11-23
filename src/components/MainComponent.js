import React, { Component } from "react";
import Lvroom from "./LvroomComponent";
import Bedroom from "./BedroomComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInfo, updateLights } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchInfo: () => {
    dispatch(fetchInfo());
  },
  updateLights: (name) => dispatch(updateLights(name)),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchInfo();
    console.log("props=" + this.props.info.info);
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    console.log(
      "type of this.props.updateLights is " + typeof this.props.updateLights
    );

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/livingroom"
            component={() => (
              <Lvroom
                lvroom={this.props.info.info}
                lvroomLoading={this.props.info.info.isLoading}
                lvroomErrMess={this.props.info.info.errMess}
              />
            )}
          />
          <Route
            exact
            path="/bedroom"
            component={() => (
              <Bedroom
                bedroom={this.props.info.info}
                bedroomLoading={this.props.info.info.isLoading}
                bedroomErrMess={this.props.info.info.errMess}
                updateLights={this.props.updateLights}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
