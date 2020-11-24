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
    console.log(
      "type of this.props.updateLights is " + typeof this.props.updateLights
    );

    console.log("this.props.info" + JSON.stringify(this.props.info));
    console.log("this.props.info.info" + JSON.stringify(this.props.info.info));

    let infoArray = [];

    if (typeof this.props.info.info.db === "undefined") {
      infoArray = this.props.info.info;
      console.log("infoArray" + JSON.stringify(infoArray));
    } else {
      infoArray = this.props.info.info.db;
      console.log("infoArray with db" + JSON.stringify(infoArray));
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home infoArray={infoArray} />} />
          <Route
            exact
            path="/livingroom"
            component={() => (
              <Lvroom
                lvroom={infoArray}
                lvroomLoading={infoArray.isLoading}
                lvroomErrMess={infoArray.errMess}
                updateLights={this.props.updateLights}
              />
            )}
          />
          <Route
            exact
            path="/bedroom"
            component={() => (
              <Bedroom
                bedroom={infoArray.filter(
                  (bedlight) => bedlight.name === "bedLight"
                )}
                bedroomLoading={infoArray.isLoading}
                bedroomErrMess={infoArray.errMess}
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
