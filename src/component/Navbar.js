import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import '../style/Navbar.css';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="bg-success" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <strong className="white-text"><MDBIcon icon="home" /></strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Kategori</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default mt-3">
                  <MDBDropdownItem href="#!">Pakaian</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Elektronik</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Furniture</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Aksesoris</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem id="search">
              <MDBNavLink to="#!">Search</MDBNavLink>
              <div className="search"><input className="form-control" type="text" placeholder="" aria-label="Search" /></div>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="#!">
                <MDBIcon far icon="heart" />
                <div>Favorite</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="#!">
                <MDBIcon far icon="bell" />
                <div>Notification</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="mycart">
                <MDBIcon icon="shopping-basket" />
                <div>My Cart</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret id="user" className="ml-2" >
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="mt-3">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;