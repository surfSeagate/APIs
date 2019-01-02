import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurfForm from "./SurfForm";
import SurfDisplay from "./SurfDisplay";

const API_KEY = "4c7419212124511b[1]681b8d17d272155";

class Surf extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    location: undefined,

    fadedRating: undefined,
    absMinBreakingHeight: undefined,
    absMaxBreakingHeight: undefined,
    compassDirection: undefined,
    period: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    chartSwell: undefined,
    chartPeriod: undefined,
    chartWind: undefined,
    error: undefined
  };

  getSurf = async e => {
    e.preventDefault();

    const site = e.target.elements.site.value;

    console.log(site);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const api_call = await fetch(
      proxyurl +
        `https://magicseaweed.com/api/c978ab102627ea2b7e92182e2c6768cd/forecast/?spot_id=${site}`
    );
    const data = await api_call.json();
    console.log(data[0]);

    let surfLocation;

    switch (site) {
      case "345":
        surfLocation = "Jax Beach";
        break;
      case "4195":
        surfLocation = "Mayport Poles";
        break;
      // case "348":
      //   surfLocation = "Ponce Inlet";
      //   break;
      // case "352":
      //   surfLocation = "Sebatian Inlet";
      //   break;
    }

    this.setState({
      location: surfLocation,

      fadedRating: data[0].fadedRating,
      absMinBreakingHeight: data[0].swell.absMinBreakingHeight,
      absMaxBreakingHeight: data[0].swell.absMaxBreakingHeight,
      compassDirection: data[0].swell.components.combined.compassDirection,
      period: data[0].swell.components.combined.period,
      windSpeed: data[0].wind.speed,
      windDirection: data[0].wind.compassDirection,
      chartSwell: data[0].charts.swell,
      chartPeriod: data[0].charts.period,
      chartWind: data[0].charts.wind,
      error: ""
    });
  };

  render() {
    console.log(this.state.chartSwell);
    return (
      <div>
        <SurfForm getSurf={this.getSurf} />
        <SurfDisplay
          location={this.state.location}
          fadedRating={this.state.fadedRating}
          absMinBreakingHeight={this.state.absMinBreakingHeight}
          absMaxBreakingHeight={this.state.absMaxBreakingHeight}
          compassDirection={this.state.compassDirection}
          period={this.state.period}
          windSpeed={this.state.windSpeed}
          windDirection={this.state.windDirection}
          chartSwell={this.state.chartSwell}
          chartPeriod={this.state.chartPeriod}
          chartWind={this.state.chartWind}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Surf;
