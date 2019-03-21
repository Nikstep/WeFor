import React from "react";
import "./Component.css";
import { Navbar, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <Navbar id="topNav">
    <Navbar.Brand
      href="#home"
      style={{
        width: "100%",
        itemAlign: "middle",
        justifyContent: "center",
        display: "flex",
        marginRight: 0,
        color: "#0e1e2e",
        fontWeight: 600,
      }}
    >
      <Carousel
        controls={false}
        interval={1000}
        keyboard={false}
        pauseOnHover={false}
        indicators={false}
        style={{ maxWidth: 50, fontSize: 32 }}
      >
        <Carousel.Item>
          <FontAwesomeIcon icon="cloud-sun" style={{ width: "50px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <FontAwesomeIcon icon="sun" style={{ width: "50px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <FontAwesomeIcon
            icon="cloud-showers-heavy"
            style={{ width: "50px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <FontAwesomeIcon icon="snowflake" style={{ width: "50px" }} />
        </Carousel.Item>
      </Carousel>
      <h1 style={{ margin: 0 }}>&nbsp;WeFor</h1>
    </Navbar.Brand>
  </Navbar>
);
export default Header;
