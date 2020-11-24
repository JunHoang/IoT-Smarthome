import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

class Bedroom extends Component {

  light = (statusStr) => {
    console.log("❤ statusStr: "+ statusStr);
    if (statusStr == 'true'){
      return "ON"
    } else return "OFF";
  }


  render() {

    console.log('type of this.props.updateLights is ' + typeof this.props.updateLights);
    console.log('this.props.bedroom: ' + JSON.stringify(this.props.bedroom));

    const bedroom = this.props.bedroom.map((bedroomthing) => {
      console.log('bedroomthing: ' + JSON.stringify(bedroomthing));

        return (
          <div className="flex-container">
            <div key={bedroomthing.id} className="photo-entry-block">
              <h5>{bedroomthing.name}</h5>
              <img
                className="photo-img"
                src={baseUrl + bedroomthing.image}
                alt={bedroomthing.name}
              />
              <Button
                className="m-1"
                variant="contained"
                color="primary"
                onClick={() => this.props.updateLights(bedroomthing.name)}
              >
                {this.light(JSON.stringify(bedroomthing.value))}
              </Button>
            </div>
          </div>
        );
    });

    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.errMess}</h4>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="flex-container">
          <div className="col-12">
            <h3>BEDROOM</h3>
          </div>
          <div className="row">
            <div>{bedroom}</div>
          </div>
        </div>
      );
  }
}
export default Bedroom;
