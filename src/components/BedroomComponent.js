import React, {Component} from 'react';
import { Button } from "@material-ui/core";
import {Loading} from './LoadingComponent';

class Bedroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isToggleOn: false
    };
}

    handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {

      const bedroom = this.props.bedroom.map((bedroomthing) => {
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