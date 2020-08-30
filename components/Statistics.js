import React from "react";
import grafic from "./images/grafic.svg";
import { Helmet } from "react-helmet";

function Statistics() {
  const TITLE = "ARM Security Statistics";
  return (
    <div className="statistics">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <img src={grafic} className="grafic" alt=""></img>
      <div className="points">
        <div className="green">
          <div className="infoGreen"></div>
          <p className="yearGreen">2017</p>
        </div>
        <div className="blue">
          <div className="infoBlue"></div>
          <p className="yearBlue">2018</p>
        </div>

        <div className="pink">
          <div className="infoPink"></div>
          <p className="yearPink">2019</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
