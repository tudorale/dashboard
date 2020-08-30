import React, { useContext } from "react";
import { StatusContext } from "./StatusContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();
  history.push("/home/dashboard");

  const user = useContext(StatusContext);
  const { admin } = user;

  const handleBack = () => {
    document.querySelector(".load").style.display = "block";
    setTimeout(() => {
      document.querySelector(".load").style.display = "none";
      history.push("/");
    }, 1500);
  };
  let statusMenu = false;

  const handleMobile = () => {
    statusMenu = !statusMenu;
    let menu = document.querySelector(".sideNavbar");

    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");

    if (statusMenu) {
      menu.style.display = "block";
      line2.style.left = "-50px";
      line2.style.opacity = "0";
      line3.style.top = "10px";
      line1.style.top = "10px";
      line1.style.transform = "rotate(45deg)";
      line3.style.transform = "rotate(-45deg)";
    } else {
      menu.style.display = "none";
      line2.style.left = "0px";
      line2.style.opacity = "1";

      line3.style.top = "20px";
      line1.style.top = "0px";
      line1.style.transform = "rotate(0deg)";
      line3.style.transform = "rotate(0deg)";
    }
  };

  return (
    <div className="dashboard">
      <div className="topNavbar">
        <h6 className="userStatus">
          You are logged in as{admin === "guest" ? " guest" : " admin"}
        </h6>
        <h1>ARM Security</h1>
        <div className="hamburger" onClick={handleMobile}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="load"></div>
      </div>
      <div className="caps"></div>
      <div className="sideNavbar">
        <Link to="/home/dashboard">
          <div className="first">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" icon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="lightgrey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="13" r="2" />
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
              <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
            </svg>
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/home/customers">
          <div className="second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="lightgrey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <p>Customers</p>
          </div>
        </Link>
        <Link to="/home/statistics">
          <div className="thirth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="lightgrey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="12" width="6" height="8" rx="1" />
              <rect x="9" y="8" width="6" height="12" rx="1" />
              <rect x="15" y="4" width="6" height="16" rx="1" />
              <line x1="4" y1="20" x2="18" y2="20" />
            </svg>
            <p>Statistics</p>
          </div>
        </Link>
        <Link to="/home/employees">
          <div className="four">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="lightgrey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <line x1="9" y1="12" x2="9.01" y2="12" />
              <line x1="13" y1="12" x2="15" y2="12" />
              <line x1="9" y1="16" x2="9.01" y2="16" />
              <line x1="13" y1="16" x2="15" y2="16" />
            </svg>
            <p>Employees</p>
          </div>
        </Link>
        <Link to="/home/tasks">
          <div className="five">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="lightgrey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="9" y1="6" x2="20" y2="6" />
              <line x1="9" y1="12" x2="20" y2="12" />
              <line x1="9" y1="18" x2="20" y2="18" />
              <line x1="5" y1="6" x2="5" y2="6.01" />
              <line x1="5" y1="12" x2="5" y2="12.01" />
              <line x1="5" y1="18" x2="5" y2="18.01" />
            </svg>
            <p>Tasks</p>
          </div>
        </Link>

        <button className="statusButton" onClick={handleBack}>
          {admin === "guest" ? "Login as admin" : "Logout"}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="decoration"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#E91E63"
            fillOpacity="11"
            d="M0,320L60,293.3C120,267,240,213,360,213.3C480,213,600,267,720,288C840,309,960,299,1080,256C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
