/* eslint-disable*/
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./CibilReports.css";

const CibilReports = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="wrapper">
        <div className="bothDivAlign">
          <div className="leftSectionDashboard">
            <Card
              className="card"
              style={{
                minHeight: 260,
                margin: 0,
                left: "350px",
                width: "55rem",
                Zindex: "99999",
              }}
            >
              <span className="heading_cibil">Share Your Details</span>
              <span className="heading_cibil_next">
                Get your cibil report for free with monthly update
              </span>
              <div>
                <span>Select Your Gender</span>
                <br />
                <input
                  type="checkbox"
                  id="term"
                  value="term"
                  style={{ width: "18px", height: "18px" }}
                />
                <span style={{ fontSize: "15px" }}>Male</span>
                <input
                  type="checkbox"
                  id="term"
                  value="term"
                  style={{ width: "18px", height: "18px" }}
                />
                <span style={{ fontSize: "15px" }}>Female</span>
                <input
                  type="checkbox"
                  id="term"
                  value="term"
                  style={{ width: "18px", height: "18px" }}
                />
              </div>
              <span style={{ fontSize: "15px" }}>Other</span>
              <Card.Body style={{ padding: 30, paddingBottom: 0 }}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="userid" className="labelTextLeft">
                    Phone Number{" "}
                  </label>
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="userid" className="labelTextRight">
                    Name
                  </label>{" "}
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <label htmlFor="userid" className="labelTextleft">
                    Phone Number
                  </label>
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="userid" className="labelText">
                    Name
                  </label>{" "}
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <label htmlFor="userid" className="labelTextLeft">
                    Phone Number
                  </label>
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="userid" className="labelText">
                    Name
                  </label>{" "}
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <label htmlFor="userid" className="labelTextLeft">
                    Phone Number
                  </label>
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                  <label htmlFor="userid" className="labelText">
                    Name
                  </label>{" "}
                  <input
                    className="inputcibil"
                    id="userid"
                    name="uesrid"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="rightSectionDashboard">
            <Card
              className="card"
              style={{
                left: 400,
                minHeight: 260,
                height: "100%",
                width: 400,
                borderRadius: 90,
              }}
            >
              <Card.Body style={{ padding: 30 }}>
                <input
                  type="checkbox"
                  id="term"
                  value="term"
                  style={{ width: "18px", height: "18px" }}
                />
                <span
                  style={{
                    margin: "10px",
                    fontSize: "15px",
                    marginTop: "80px",
                    width: "500px",
                  }}
                >
                  I accept the{" "}
                  <Link>
                    {" "}
                    <span style={{ color: "#02c650", fontWeight: "30px" }}>
                      terms and condition
                    </span>
                  </Link>{" "}
                  of TU CIBIL REPORT accept the term condition of accept the
                  term condition of
                </span>
                <br />
                <button className="button_cibil">Get Cibil Report</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CibilReports;
