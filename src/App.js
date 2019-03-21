/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faCloudShowersHeavy,
  faSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/Header";
import InputField from "./Components/InputField";

library.add(faCloudSun, faCloudShowersHeavy, faSun, faSnowflake);

const App = () => (
  <>
    <Header />
    <InputField />
    <Card
      style={{
        width: "18rem",
        margin: "auto",
        background: "#ffaa00",
        color: "0E1E2E",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ;
  </>
);
export default App;
