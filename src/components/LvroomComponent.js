import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Lvroom extends Component {
  light = (statusStr) => {
    console.log("😜statusStr lvLight: " + statusStr);
    if (statusStr == 'true'){
      return "ON"
    } else return "OFF";
  }

    render() {

      console.log(JSON.stringify(this.props))

      const lvroom = this.props.lvroom.map((lvroomthing) => {
        if (lvroomthing.name === "lvLight") {
          return (
            <div className="flex-container">
              <div key={lvroomthing.id} className="photo-entry-block">
                <h5>{lvroomthing.name}</h5>
                <img
                  className="photo-img"
                  src={baseUrl + lvroomthing.image}
                  alt={lvroomthing.name}
                />
                <Button
                  className="m-1"
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.updateLights(lvroomthing.name)}
                >
                  {this.light(JSON.stringify(lvroomthing.value))}
                </Button>
              </div>
            </div>
          );
        }
        else if(lvroomthing.name === "thermistor") {
          return (
            <div className="flex-container">
              <div className="photo-entry-block">
                <h5>{lvroomthing.name}</h5>
                <img className="photo-img"  src={baseUrl + lvroomthing.image} alt={lvroomthing.name}/>
                <h6>Temperature in livingroom is {lvroomthing.value}</h6>
              </div>
            </div>
          )
        }
      })

      if(this.props.isLoading) {
        return(
          <div className="container">
            <div className="row"><Loading/></div>
          </div>
        )
      }
      else if (this.props.errMess) {
        return(
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4>{this.props.errMess}</h4>
              </div>
            </div>
          </div>
        )
      }
      else    
        return(
          <div className="flex-container">
            <div className="col-12">
              <h3>LIVING ROOM</h3>
            </div>
            <div className="row">
              {lvroom}
            </div>
          </div>
        )

    }
}
export default Lvroom;