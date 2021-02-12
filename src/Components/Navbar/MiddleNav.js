import React, { Component } from "react";
import "../Navbar/Navbar.css"
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav
 
} from "react-bootstrap";

class MiddleNav extends Component {
    render() {
      return (
        <div>
            <>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">WOMEN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">MEN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">KIDS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-3">SALE </Nav.Link>
                    </Nav.Item>
                </Nav>
                
                </>
          
        </div>
      );
    }
  }
  export default MiddleNav;