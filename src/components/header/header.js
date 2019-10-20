import React from 'react';
import './header.css';
import { ButtonGroup, Button, DropdownButton, Dropdown, NavDropdown, ButtonToolbar, Navbar, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ addedCount, total}) => {
  return (

    <div className="d-flex flex-column">
    <br />
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">STORE</Navbar.Brand>
    <Nav className="mr-sm-6">
    <Nav.Link href="#home">About</Nav.Link>
    <Nav.Link href="/cart"><i className="fa fa-shopping-cart"></i>      { addedCount } Items { total } $         </Nav.Link>
    </Nav>    
    </Navbar>
    <br />
    </div>
  );
};

const mapStateToProps = ({  cartItems, orderTotal }) => {
    return {
    addedCount: cartItems.reduce(
      (count,cartItems) => count + (cartItems.count>0 ? cartItems.count : 0),0),
    total: orderTotal
  };
};


export default  connect(mapStateToProps)(Header);
