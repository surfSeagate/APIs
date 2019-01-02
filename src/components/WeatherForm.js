import React, { Component } from "react";

const WeatherForm = props => (
  <div className="container">
    <div className="row">
      <div className=" col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
        <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <button style={{ marginTop: "10px" }}>Get Weather</button>
        </form>
      </div>
    </div>
  </div>
);

export default WeatherForm;
