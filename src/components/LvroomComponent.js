import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import {LVROOMTHINGS} from '../shared/lvroomthings';

class Lvroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lvroomthings: LVROOMTHINGS
        };
    }

    render() {

      const lvroom = this.props.lvroomthings.map((lvroomthing) => {
        return (
          <div className="col-5 col-md-5 m-1">
            <Card key={lvroomthing.name}>
              <CardImg src={lvroomthing.image} alt={lvroomthing.name} />
                <CardBody>
                  <CardTitle>{lvroomthing.name}</CardTitle>
                  <CardText>{lvroomthing.value}</CardText>
                </CardBody>
            </Card>
          </div>
        )
      })
        
      return(
        <div className="container">
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