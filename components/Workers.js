import React from "react";
import { Helmet } from "react-helmet";

function Workers() {
  const TITLE = "ARM Security Employees";
  return (
    <div className="workers">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="infoWorkers">
        <p>Name</p>
        <p>Role</p>
        <p>Office</p>
      </div>
      <hr />
      <div className="worker">
        <p>John</p>
        <p>Front-end Developer</p>
        <p>C4</p>
      </div>
      <div className="worker">
        <p>Peter</p>
        <p>Back-end Developer</p>
        <p>C2</p>
      </div>
      <div className="worker">
        <p>Elliot</p>
        <p>Security Engineer</p>
        <p>C3</p>
      </div>
      <div className="worker">
        <p>Mosk</p>
        <p>Software Developer</p>
        <p>C1</p>
      </div>
    </div>
  );
}

export default Workers;
