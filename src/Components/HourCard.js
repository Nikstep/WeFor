/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { memo } from "react";
import { Card } from "react-bootstrap";
import WeatherIcon from "react-icons-weather";

const HourCard = memo(props => (
  <>
    <Card
      style={{
        background: "#ffaa00",
        color: "0E1E2E",
      }}
    >
      <Card.Header style={{ textAlign: "center" }}>
        <h6 style={{ margin: 0 }}>{props.dt_txt.slice(11, -3).slice()}</h6>
      </Card.Header>
      <Card.Body style={{ textAlign: "center" }}>
        <WeatherIcon
          name="owm"
          iconId={`${props.weather[0].id}`}
          style={{ fontSize: 30, marginTop: 10 }}
        />
        <Card.Title style={{ fontSize: 20, marginTop: 4 }}>
          {`${Math.round(props.main.temp)}℃`}
        </Card.Title>
      </Card.Body>
    </Card>
  </>
));
export default HourCard;
