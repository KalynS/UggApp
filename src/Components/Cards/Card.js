import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Card} from "react-bootstrap";
import "../Cards/Card.css";


class Cardss extends Component{
    render (){
        return(
            
        <div>
          <Card style={{ width: 'auto', height: "531px" }}>
            <Card.Body>
                <Card.Title className="cardTitle1">New for Spring</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">With QUIÑ and 6LACK in the Fluff Yeah and Fluff You.</Card.Subtitle>
                <Card.Text>
                </Card.Text>
                <Card.Link href="#">SHOP NEW ARRIVALS</Card.Link>
                
            </Card.Body>
          </Card>
        </div> 

            
        )
    }
}
export default Cardss;