import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center mb-5 mb-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="brand-navbar">
                    {props.name}
                    <br />
                    <strong className="brand-name"> FS Md. Shohel Rana </strong>
                  </h1>
                  <h2 className="my-3 team-brand-name">
                    We are the team of telented developer making website
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="home img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
