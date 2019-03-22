/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./Component.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const InputField = props => (
  <form onSubmit={props.weatherGetter}>
    <InputGroup
      role="form"
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
        name="city"
      />
      <InputGroup.Append>
        <Button id="inputButton" type="submit">
          Get Forecast
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </form>
);

export default InputField;
