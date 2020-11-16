import React, {Component} from 'react';
import {INFO} from '../shared/info';
import { Button } from "@material-ui/core";

class Bedroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: INFO,
            isToggleOn: INFO.value
        };
    }

    handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {

      const bedroom = this.props.info.map((bedroomthing) => {
        if (bedroomthing.name === "bedLight") {
          return (
            <div className="flex-container">
              <div className="photo-entry-block">
                <h5>{bedroomthing.name}</h5>
                <img className="photo-img"  src={bedroomthing.image} alt={bedroomthing.name}/>
                <Button className="m-1" variant="contained" color="primary" onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Button>
              </div>
            </div>
          )
        }
        // else {
        //   return (

                
        //   )
        // }

      })
        
      return(
        <div className="flex-container">
          <div className="col-12">
            <h3>BEDROOM</h3>
          </div>
          <div className="row">
              <div>
                {bedroom}
              </div>
          </div>
        </div>
      )

    }
}
export default Bedroom;