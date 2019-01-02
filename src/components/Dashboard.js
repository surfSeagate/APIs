import React from "react";
import Weather from "./Weather";
import Surf from "./Surf";
import Pictures from "./Pictures";
import About from "./About";
import Jumbo from "./Jumbo";

const Dashboard = () => (
  <div>
    <Jumbo />
  </div>
);

export default Dashboard;

// <div>
// <h1 className="display-3 text-center my-4">SurfSeagate</h1>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-3">
//           <button className="btn btn-primary btn-block ">Weather</button>
//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-success btn-block ">
//             Surf Conditions
//           </button>
//         </div>
//         <div className="col-md-3">
//           <div className="dropdown">
//             <button className="btn btn-warning btn-block ">Local Photos</button>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <button className="btn btn-danger btn-block ">About</button>
//         </div>
//       </div>
//     </div>
//   </div>
