import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../styles/analytics.css";
export const Analytics = () => {
  return (
    <>
      <div class="simple-analytics-container">
        <div class="visitors-count">
          <h1>Site Views</h1>
          <h1>1000</h1>
        </div>

        <div className="pie-chart-container">
          <div className="country-lister">
            <div className="visitors-country">
              <h3>India</h3>
              <div className="color-code" />
            </div>
            <div className="visitors-country">
              <h3>USA</h3>
              <div className="color-code" />
            </div>
            <div className="visitors-country">
              <h3>Canada</h3>
              <div className="color-code" />
            </div>
          </div>

          <div className="pie-chart">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
