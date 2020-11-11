import React, {Component} from 'react';
import {LVROOMTHINGS} from '../shared/lvroomthings';
import { Button } from "@material-ui/core";

class Lvroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lvroomthings: LVROOMTHINGS,
            isToggleOn: LVROOMTHINGS.value
        };
    }

    handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {

      const lvroom = this.props.lvroomthings.map((lvroomthing) => {
        if (lvroomthing.name === "lvLight") {
          return (
            <div className="flex-container">
              <div className="photo-entry-block">
                <h5>{lvroomthing.name}</h5>
                <img className="photo-img"  src={lvroomthing.image} alt={lvroomthing.name}/>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Button>
              </div>
            </div>
          )
        }
        else {
          return (
            <div className="flex-container">
              <div className="photo-entry-block">
                <h5>{lvroomthing.name}</h5>
                <img className="photo-img"  src={lvroomthing.image} alt={lvroomthing.name}/>
                <h6>{lvroomthing.value}</h6>
              </div>
            </div>
          )
        }

      })
        
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