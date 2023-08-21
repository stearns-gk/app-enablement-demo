import React from "react";
import "./styles.css";
import { Accordion, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import "bootstrap/dist/css/bootstrap.min.css";

const Test = props => {
  const Styles = {
    width: "100%",
    position: "fixed",
    bottom: "0px"
  };

  return (
    <div className="my-footer" style={Styles}>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Link Info
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>{`Link Address: ${props.sa}`}</div>
              <div>{`community board: ${props.cb}`}</div>
              <div>{`lat: ${props.lat}`}</div>
              <div>{`lon: ${props.lon}`}</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};