import React, { Component } from "react";

const SurfDisplay = props => {
  $(".carousel").carousel({
    interval: 3000,
    keyboard: true,
    pause: "hover",
    wrap: true
  });
  return (
    <div className="container">
      {props.location && (
        <div className="row">
          <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
            {props.location && (
              <h1 className="text-light">{props.location} </h1>
            )}

            {props.absMinBreakingHeight && (
              <h3 className="text-light">
                Waves: {props.absMinBreakingHeight} -
                {props.absMaxBreakingHeight} ft
              </h3>
            )}

            {props.period && (
              <h3 className="text-light"> Period: {props.period} seconds </h3>
            )}
            {props.compassDirection && (
              <h3 className="text-light">
                Wave direction: {props.compassDirection}
              </h3>
            )}

            <h3 className="text-light"> Rating: {props.fadedRating} </h3>

            <hr />

            {props.windSpeed && (
              <h3 className="text-light"> Wind speed: {props.windSpeed} </h3>
            )}
            {props.windDirection && (
              <h3 className="text-light">
                Wind direction: {props.windDirection}
              </h3>
            )}
            <hr />
            <a href="http://magicseaweed.com">
              <img src="https://im-1-uk.msw.ms/msw_powered_by.png" />
            </a>
          </div>
        </div>
      )}
      {props.location && (
        <div
          id="slider3"
          className="carousel slide mb-5  col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded  "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li className="active" data-target="#slider3" data-slide-to="0" />
            <li data-target="#slider3" data-slide-to="1" />
            <li data-target="#slider3" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h3>Swell</h3>
              <img
                className="d-block img-fluid"
                src={props.chartSwell}
                alt="First Slide"
              />
            </div>
            <div className="carousel-item">
              <h3>Period</h3>
              <img
                className="d-block img-fluid"
                src={props.chartPeriod}
                alt="Second Slide"
              />
            </div>
            <div className="carousel-item">
              <h3>Wind</h3>
              <img
                className="d-block img-fluid"
                src={props.chartWind}
                alt="Third Slide"
              />
            </div>
          </div>
          <a
            href="#slider3"
            className="carousel-control-prev"
            data-slide="prev"
          >
            <span clasName="carousel-control-prev-icon" />
          </a>

          <a
            href="#slider3"
            className="carousel-control-next"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      )}
    </div>
  );
};

export default SurfDisplay;

// <button
//             type="button"
//             classNameName="btn btn-primary"
//             data-toggle="modal"
//             data-target="#locModal"
//           >
//             Change Location
//           </button>

// <div>
//     {props.city && <p> Location: {props.city}</p>}
//     {props.temp && <p> Temprature: {props.temp} </p>}
//     {props.humidity && <p> Humidity: {props.humidity} </p>}
//     {props.description && <p> Conditions: {props.description} </p>}
//     {props.error && <p>{props.error}</p>}
//   </div>

// {props.icon && (
//   <img src={`https://openweathermap.org/img/w/${props.icon}.png`} />
// )}
