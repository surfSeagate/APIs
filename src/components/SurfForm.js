import React, { Component } from "react";

const SurfForm = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
        <form onSubmit={props.getSurf}>
          <div>
            <select name="site">
              <option value="345">Jax Beach Pier</option>
              <option value="4195">Mayport Poles</option>
            </select>
          </div>
          <div
            className="col-md-6 mx-auto text-center"
            style={{ marginTop: "10px" }}
          >
            <button>Get Surf</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SurfForm;
