import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

import Header from "./Header.jsx";
import Calls from "./Calls.jsx";
import Archived from "./Archived.jsx";

const App = () => {
  const [activeCallsList, setActiveCallsList] = useState([]);
  const [allCallStyle, setAllCallStyle]= useState("all-calls-selected");
  const [archivedCallStyle, setArchivedCallStyle]= useState("archived-calls");
  const [allCallSelected, setallCallSelected] = useState(true);
  const [allArchivedCallSelected, setArchivedCallSelected] = useState(false);


  //Fetch list of calls from the API  
  useEffect(() => {
    const getCalls = async () => {
      try {
        const callDetails = await axios.get(
          "https://aircall-job.herokuapp.com/activities"
        );
        setActiveCallsList(callDetails.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCalls();
  }, []);
  
  //Function to Archive the Call
  const archiveCall = async(id) => {
    try {
      await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
        is_archived: true
      });
      const callDetails = await axios.get(
        "https://aircall-job.herokuapp.com/activities"
      );
      setActiveCallsList(callDetails.data); 
    } catch (error) {
      console.log(error);
    }
  }
  
  //Map list of unarchived calls to Calls component
  const activeCalls = activeCallsList.map(call => {
    return (
      !call.is_archived && (
        <Calls
          key={call.id}
          id = {call.id}
          time={call.created_at}
          direction={call.direction}
          from={call.from}
          to={call.to}
          via={call.via}
          archived={call.is_archived}
          archiveCall = {archiveCall}
        />
      )
    );
  });
  
  //Map list of archived calls to Archived component
  const archivedCalls = activeCallsList.map(call => {
    return (
      call.is_archived && (
        <Archived
          key={call.id}
          time={call.created_at}
          direction={call.direction}
          from={call.from}
          to={call.to}
          via={call.via}
          archived={call.is_archived}
        />
      )
    );
  });
  
  //Change style of the tab when All Calls tab is selected
  const getAllCalls = () => {
    setAllCallStyle("all-calls-selected");
    setArchivedCallStyle("archived-calls");
    setallCallSelected(true);
    setArchivedCallSelected(false);
  }

  //Change style of the tab when Archived Calls tab is selected
  const getAllArchivedCalls = () => {
    setAllCallStyle("all-calls");
    setArchivedCallStyle("archived-calls-selected");
    setArchivedCallSelected(true);
    setallCallSelected(false);
  }

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="container-view">
        <div className="tabs">
          <div className="left-tab">
            <h1>Activity Feed</h1>
          </div>
          <div className="right-tab">
            <div onClick={getAllCalls} className={allCallStyle}>All Calls</div>
            <div onClick={getAllArchivedCalls} className={archivedCallStyle}>Archived Calls</div>
          </div>
        </div>
        <div className="calls-list-container">{allCallSelected && activeCalls}</div>
        <div className="calls-list-container">{allArchivedCallSelected && archivedCalls}</div>
      </div>
      <div className="footer-container-view">
        <div className="footer-icons">
          <i className="fas fa-phone-alt fa-lg"></i>
          <i className="far fa-user fa-lg"></i>
          <i className="fas fa-cog fa-lg"></i>
          <i className="fas fa-record-vinyl fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
