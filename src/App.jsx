import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="tabs">
          <div className="left-tab">
            <h1>Activity Feed</h1>
          </div>
          <div className="right-tab">
            <div className="all-calls">All Calls</div>
            <div className="archived-calls">Archived Calls</div>
          </div>
        </div>
        <div className="calls-list-container">
          <div className="call-container">
            <div className="date">
              ................ 17- July - 2020 .....................
            </div>
            <h1>Call 1</h1>
          </div>
        </div>
      </div>
      <div className="footer-container-view">
        <div className="footer-icons">
          <i class="fas fa-phone-alt fa-lg"></i>
          <i class="far fa-user fa-lg"></i>
          <i class="fas fa-cog fa-lg"></i>
          <i class="fas fa-record-vinyl fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
