import React, {Component} from 'react';
import {BEDROOMTHINGS} from '../shared/bedroomthings';
import { Button } from "@material-ui/core";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


class Bedroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bedroomthings: BEDROOMTHINGS,
            isToggleOn: BEDROOMTHINGS.value
        };
    }

    handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {

      const bedroom = this.props.bedroomthings.map((bedroomthing) => {
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
          {/* <div>
          <ReactWeather
            forecast="today"
            apikey="965d50f6a45bcf6c54f25be29c7924bb"
            type="city"
            city="Mikkeli"/>
          </div> */}
          </div>
        </div>
      )

    }
}
export default Bedroom;