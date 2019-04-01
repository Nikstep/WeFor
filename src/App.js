/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudSun,
  faCloudShowersHeavy,
  faSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Cards from "./Components/Cards";

const apiKey = "d82470b08fc212cd5253d7b74f8b01c1";

library.add(faCloudSun, faCloudShowersHeavy, faSun, faSnowflake);

class App extends Component {
  state = {
    city: undefined,
    temp: "",
    iconID: "200",
    description: "",
    list: [],
    date: undefined,
    humidity: "",
    wind: "",
    open: false,
  };

  weatherGetter = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
    );
    const data = await apiCall.json();
    this.setState({
      city: data.city.name,
      state: data.city.country,
      temp: Math.round(data.list[0].main.temp),
      iconID: data.list[0].weather[0].id,
      description: data.list[0].weather[0].description,
      list: data.list,
      humidity: data.list[0].main.humidity,
      wind: data.list[0].wind.speed,
      open: true,
      date: `${String(
        new Date(data.list[0].dt * 1000).getUTCMonth() + 1,
      )}-${String(new Date(data.list[0].dt * 1000).getUTCDate())}`,
    });
  };

  render() {
    return (
      <>
        <Header />
        <h5
          style={{
            color: "#ffaa00",
            textAlign: "center",
            marginTop: 10,
            marginBottom: -10,
          }}
        >
          Weather forecast App, just enter your city of choice and wonder.
        </h5>
        <InputField weatherGetter={this.weatherGetter} />
        <Cards
          city={this.state.city}
          state={this.state.state}
          temp={this.state.temp}
          desc={this.state.description}
          icon={this.state.iconID}
          list={this.state.list}
          date={this.state.date}
          humidity={this.state.humidity}
          wind={this.state.wind}
          open={this.state.open}
        />
      </>
    );
  }
}
export default App;
