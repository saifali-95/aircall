import React from "react";
import "./css/calls.css";

const Calls = props => {
  
  let d = new Date(props.time);
 
  return (
    <div className="call-container">
      <div className="date">
      ----------------------------------------{d.toLocaleDateString()}----------------------------------------
      </div>
      <div className="call-item">
        <div className="call-left">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="call-center">
          <div className="call-number">
            {props.from}
          </div>
          <div className="call-detail">
            {props.via}
          </div>
        </div>
        <div className="call-right">
          {d.toLocaleTimeString()}
          <i className="fas fa-archive"></i>
        </div>
      </div>
    </div>
  );
};

export default Calls;
