import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { bounce } from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }


      render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="41" alt='Smart Home' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/livingroom'><span className="fa fa-television fa-lg"></span> Living Room</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/bedroom'><span className="fa fa-bed fa-lg"></span> Bed Room</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>SMART HOME</h1>
                            </div>
                            <div className="col">
                                <Bounce><p>Welcome to our IoT Project!</p></Bounce>                           
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;