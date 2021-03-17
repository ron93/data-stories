import React, { useState, useCallback, useEffect } from "react";
import { csv, scaleBand, scaleLinear, max, axisBottom, axisLeft } from "d3";
import ReactDOM from "react-dom";
import "./index.css";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };
const yValue = d => d.Country;
const xValue =  d => d.Population;

export const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .padding(0.01)
    .domain(data.map(yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  // KEY used as mapped values unique identifier.

  console.log("ticks", xScale.ticks());
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top} )`}>
        {/* x axis ticks */}
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />

        {/* y- axis ticks */}
        <AxisLeft yScale={yScale} />

        <Marks data={data}
         yScale={yScale}
          xScale={xScale} 
          xValue = {xValue}
          yValue={yValue}
          />
      </g>
    </svg>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
