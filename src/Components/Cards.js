/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { memo } from "react";
import {
  CardGroup,
  Card,
  Container,
  Col,
  Row,
  Collapse,
} from "react-bootstrap";
import WeatherIcon from "react-icons-weather";
import DayCard from "./DayCard";
import HourCard from "./HourCard";

const Cards = memo(props => {
  return (
    <Collapse in={props.open}>
      <Container style={{ maxWidth: 800 }}>
        <>
          <Row>
            <Col sm={4} xs={12}>
              <Card
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#ffaa00",
                  color: "0E1E2E",
                  display: props.city === undefined ? "none" : "flex",
                }}
              >
                <Card.Header style={{ textAlign: "center" }}>
                  <h2 style={{ margin: 0 }}>{props.city}</h2>
                </Card.Header>
                <Card.Body style={{ textAlign: "center" }}>
                  <WeatherIcon
                    name="owm"
                    iconId={`${props.icon}`}
                    style={{ fontSize: 50, marginTop: 20 }}
                  />
                  <Card.Title style={{ fontSize: 40, marginTop: 10 }}>
                    {`${props.temp}℃`}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: 500, fontSize: 24 }}>
                    {props.desc.charAt(0).toUpperCase() + props.desc.slice(1)}
                  </Card.Text>
                  <Card.Text style={{ fontWeight: 500, fontSize: 20 }}>
                    Humidity: {props.humidity} %
                  </Card.Text>
                  <Card.Text style={{ fontWeight: 500, fontSize: 20 }}>
                    Wind: {props.wind} m/s
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ textAlign: "center" }}>
                  <h5 style={{ margin: 0 }}>Now</h5>
                </Card.Footer>
              </Card>
            </Col>
            <Col sm={8} xs={12}>
              <Row>
                <h3
                  style={{
                    color: "#ffaa00",
                    margin: "auto",
                    marginBottom: 5,
                    display: props.city === undefined ? "none" : "block",
                  }}
                >
                  Today
                </h3>
                <CardGroup
                  style={{
                    width: "100%",
                    display: props.city === undefined ? "none" : "flex",
                  }}
                >
                  {props.list.map((forcast, index) =>
                    forcast.dt_txt.includes(
                      `${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    ) ? (
                      <HourCard {...forcast} key={index} />
                    ) : (
                      ""
                    ),
                  )}
                </CardGroup>
              </Row>
              <Row>
                <h3
                  style={{
                    color: "#ffaa00",
                    margin: "auto",
                    marginTop: 5,
                    display: props.city === undefined ? "none" : "block",
                  }}
                >
                  Forthcoming Days
                </h3>
                <CardGroup
                  style={{
                    width: "100%",
                    marginTop: 10,
                    display: props.city === undefined ? "none" : "flex",
                  }}
                >
                  {props.list.map((forcast, index) => {
                    return forcast.dt_txt.includes("15:00:00") &&
                      !forcast.dt_txt.includes(props.date) ? (
                      // eslint-disable-next-line react/jsx-indent
                      <DayCard {...forcast} key={index} />
                    ) : (
                      ""
                    );
                  })}
                </CardGroup>
              </Row>
            </Col>
          </Row>
        </>
      </Container>
    </Collapse>
  );
});

export default Cards;
