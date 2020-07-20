import React, { Component } from 'react';
import {Jumbotron, Container, Navbar, NavItem, Nav, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';
 

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

    render() {
        return(
          <div>
            <Navbar color="dark" dark expand="md">
            <Container>
              <NavbarToggler onClick={this.toggleNow} />
              <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" width="41" height="30" alt={this.props.title} />{this.props.title}</NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/home" className="nav-link"><span className="fa fa-home">Home</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/menu" className="nav-link"><span className="fa fa-list">Menu</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about" className="nav-link"><span className="fa fa-people">About</span></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/contactus" className="nav-link"><span className="fa fa-phone">Contact</span></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
            </Navbar>
            <Jumbotron>
              <Container>
                <h1>Indian Dishes</h1>
                <p>Life is too short to try and glue together broken plates that were cheap in the first place.</p>
              </Container>
            </Jumbotron>
          </div>
        )
    }
}

export default Header;