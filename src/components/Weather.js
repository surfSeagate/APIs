import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const API_KEY = "4c7419212124511b0681b8d17d272155";

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    city: undefined,
    temp: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    pressure: undefined,
    wind: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API_KEY}`
    );
    const data = await api_call.json();
    if (city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        description: data.weather[0].description,

        error: ""
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        wind: undefined,
        icon: undefined,
        error: "Please enter the value."
      });
    }
  };

  render() {
    return (
      <div>
        <WeatherForm getWeather={this.getWeather} />
        <WeatherDisplay
          temp={this.state.temp}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          pressure={this.state.pressure}
          wind={this.state.wind}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Weather;
