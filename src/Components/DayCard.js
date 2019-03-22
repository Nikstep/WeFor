/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { memo } from "react";
import { Card } from "react-bootstrap";
import WeatherIcon from "react-icons-weather";

const DayCard = memo(props => {
  const date = `${new Date(props.dt * 1000).getUTCDate()}.${new Date(
    props.dt * 1000,
  ).getUTCMonth() + 1}`;
  return (
    <>
      <Card style={{ background: "#ffaa00", color: "0E1E2E" }}>
        <Card.Header style={{ textAlign: "center" }}>
          <h6 style={{ margin: 0 }}>{date}</h6>
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <WeatherIcon
            name="owm"
            iconId={`${props.weather[0].id}`}
            style={{ fontSize: 30, marginTop: 10 }}
          />
          <Card.Title style={{ fontSize: 20, marginTop: 4 }}>
            {`${Math.round((props.main.temp_max + props.main.temp_min) / 2)}℃`}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
});

export default DayCard;
