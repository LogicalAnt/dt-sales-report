import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/actions/auth";
const NavigationBarComponent = ({ logoutSubmitter }: any) => {
  const history = useHistory();
  const handleLogout = () => {
    logoutSubmitter(history);
  };

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="mr-md-4">
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutSubmitter: (history: any) => {
      dispatch(logout(history));
    },
  };
};

export const NavigationBar = connect(
  null,
  mapDispatchToProps
)(NavigationBarComponent);
