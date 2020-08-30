import React from "react";
import { Helmet } from "react-helmet";

const Customers = () => {
  const TITLE = "ARM Security Customers";
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="mainC">
        <div className="customers">
          <p>Company</p>
          <p>Threats</p>
          <p>Last Attack</p>

          <hr />
        </div>
        <div className="firstCompany">
          <p>E Corp</p>
          <p>1</p>
          <p>08/21/2020</p>
        </div>
        <div className="firstCompany addonCompany1">
          <p>Fluxion</p>
          <p>3</p>
          <p>07/23/2020</p>
        </div>
        <div className="firstCompany addonCompany2">
          <p>L Script</p>
          <p>6</p>
          <p>05/27/2020</p>
        </div>
        <div className="firstCompany  addonCompany3">
          <p>CRA</p>
          <p>9</p>
          <p>06/2/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
