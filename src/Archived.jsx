import React from "react";
import "./css/archived.css";

const Archived = props => {
  
  //To Format Timezone into Date and Time
  let d = new Date(props.time);

  return (
    <div className="archived-call-container">
      <div className="archived-date">
        ----------------------------------------{d.toLocaleDateString()}
        ----------------------------------------
      </div>
      <div className="archived-call-item">
        <div className="archived-call-left">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="archived-call-center">
          <div className="archived-call-number">{props.from}</div>
          <div className="archived-call-detail">{props.via}</div>
        </div>
        <div className="archived-call-right">{d.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default Archived;
