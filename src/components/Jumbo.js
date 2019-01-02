import React from "react";

const Jumbo = props => (
  <div className="jumbotron-background">
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-6 jumbotron-header">
          SeagateSurf...ing or just chilling at the beach!
        </h1>
        <h2 className="jumbotron-header">
          Weather and Conditions of local First Coast surf and beach!
        </h2>

        <div className="button-about">
          <a className="btn btn-primary btn-lg" href="/about" role="button">
            About
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Jumbo;
