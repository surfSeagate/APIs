import React, { Component } from "react";

const About = () => (
  <div className="container ">
    <div>
      <h2>SeagateSurf</h2>
    </div>

    <div>
      <h3> This site uses ES6 Async - Await fetching code.</h3>
    </div>
    <div>
      <h3>API sources:</h3>
    </div>

    <div>
      <a href="https://magicseaweed.com/developer/api">
        {" "}
        <h4>Magicseaweed</h4>
      </a>
    </div>
    <div>
      <a href="https://openweathermap.org/api">
        {" "}
        <h4>Openweathermap</h4>
      </a>
    </div>
  </div>
);

export default About;
