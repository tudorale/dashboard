import React, { useState, useContext } from "react";
import { StatusContext } from "./StatusContext";
import { Helmet } from "react-helmet";

function DashboardS() {
  const user = useContext(StatusContext);
  const { admin } = user;

  const TITLE = "ARM Security Dashboard";

  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);

  const handleDisable = () => {
    if (admin === true) {
      setActive(false);

      let downButton = document.querySelector(".down");
      downButton.style.display = "none";

      document.querySelector("#active").style.color = "#ff4545";
      document.querySelector(".open").style.display = "block";
    } else {
      return null;
    }
  };
  const handleActive = () => {
    if (admin === true) {
      setActive(true);

      let downButton = document.querySelector(".down");
      downButton.style.display = "block";

      let status = document.querySelector("#active");
      status.style.color = "lightgreen";

      document.querySelector(".open").style.display = "none";
    } else {
      return null;
    }
  };

  const handleDisable2 = () => {
    if (admin === true) {
      setActive2(false);
      let shutdownButton2 = document.querySelector(".box2Down");
      shutdownButton2.style.display = "none";

      document.querySelector("#active2").style.color = "#ff4545";
      document.querySelector(".box2Open").style.display = "block";
    } else {
      return null;
    }
  };
  const handleActive2 = () => {
    if (admin === true) {
      setActive2(true);
      let shutdownButton2 = document.querySelector(".box2Down");
      shutdownButton2.style.display = "block";

      document.querySelector("#active2").style.color = "lightgreen";
      document.querySelector(".box2Open").style.display = "none";
    } else {
      return null;
    }
  };

  return (
    <div className="home">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="box1">
        <p>Server 1</p>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="serverIcon"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E91E63"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="4" width="18" height="8" rx="3" />
            <rect x="3" y="12" width="18" height="8" rx="3" />
            <line x1="7" y1="8" x2="7" y2="8.01" />
            <line x1="7" y1="16" x2="7" y2="16.01" />
          </svg>{" "}
          Status:{" "}
          <span id="active">{active === true ? "active" : "disabled"}</span>
        </h6>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="memoryIcon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E91E63"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>
          Memory: 535.4 GB
        </h6>
        <div className="box1Addon">
          <button className="down" onClick={handleDisable}>
            {admin === "guest" ? "You need to be Admin" : "Shutdown"}
          </button>
          <button className="open" onClick={handleActive}>
            {admin === "guest" ? "You need to be Admin" : "Open"}
          </button>
        </div>
      </div>

      <div className="box2">
        <p>Server 2</p>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="serverIcon2"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E91E63"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="4" width="18" height="8" rx="3" />
            <rect x="3" y="12" width="18" height="8" rx="3" />
            <line x1="7" y1="8" x2="7" y2="8.01" />
            <line x1="7" y1="16" x2="7" y2="16.01" />
          </svg>{" "}
          Status:{" "}
          <span id="active2">{active2 === true ? "active" : "disabled"}</span>
        </h6>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="memoryIcon2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E91E63"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>
          Memory: 232.4 GB
        </h6>
        <div className="box2Addon">
          <button className="box2Down" onClick={handleDisable2}>
            {admin === "guest" ? "You need to be Admin" : "Shutdown"}
          </button>
          <button className="box2Open" onClick={handleActive2}>
            {admin === "guest" ? "You need to be Admin" : "Open"}
          </button>
        </div>
      </div>
      <div className="logBox">
        <p>Server usage</p>

        <div className="s1"></div>
        <h6 className="s1P">87.2%</h6>
        <div className="s2"></div>
        <h6 className="s2P">69.3%</h6>
      </div>
    </div>
  );
}

export default DashboardS;
