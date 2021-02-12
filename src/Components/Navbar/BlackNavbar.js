import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Navbar/Navbar.css"
import {
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
class BlackNavbar extends Component{
    render (){
        return(
            <div className="board">
                <>
                    <Navbar className="bg-custom" variant="dark"  >
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#home" className="white"><a href><u> Send a Gift Card   |   </u></a></Nav.Link>
                        <Nav.Link href="#features" className="white">Our stores are open in select locations. <a href><u> Learn More.</u></a></Nav.Link>
                        <Nav.Link href="#pricing"className="white"></Nav.Link>
                        </Nav>
                        <Form inline className="white">
                        Ugg Rewards
                        
                        </Form>
                    </Navbar>
                    </>
            </div>
        )
    }
}
export default BlackNavbar;