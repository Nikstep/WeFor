import React from "react";
import "./Component.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const InputField = () => (
  <InputGroup
    className="mb-3"
    style={{
      maxWidth: 600,
      margin: "auto",
      marginTop: 20,
      borderRadius: "6px",
      boxShadow: "2px 2px 5px #333",
    }}
  >
    <FormControl
      id="mainInput"
      placeholder="Enter name of the city"
      aria-label="Enter name of the city"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button id="inputButton">Get Forecast</Button>
    </InputGroup.Append>
  </InputGroup>
);

export default InputField;
