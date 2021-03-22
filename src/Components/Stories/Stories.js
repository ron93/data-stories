import React, { useState } from "react";
import { scaleBand, scaleLinear, max, format } from "d3";

import { useData } from "../useData";
import { AxisBottom } from "../AxisBottom";
import { AxisLeft } from "../AxisLeft";
import { Marks } from "../Marks";
import "./Stories.css";
// import { id } from "vega";
import { Dropdown } from "./Dropdown";

const width = 960;
const height = 500;
const margin = { top: 10, right: 20, bottom: 150, left: 230 };
const xAxisLabelOffset = 55;

const yValue = (d) => d.Country;
const xValue = (d) => d.Population;

const siFormat = format(".2s");
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

const options = [
  { value: "drop-option", label: "--choose continent--" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "australia", label: "Australia" },
  { value: "europe", label: "Europe" },
  { value: "s-america", label: "South America" },
  { value: "n-america", label: "North America" },
];
const initialValue = "Africa";

// stories component

export const Stories = () => {
  const data = useData();
  const [selectedValue, setSelectedValue] = useState(initialValue);
  console.log(selectedValue);
  if (!data) {
    return <pre>Loading...</pre>;
  }

  // console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .paddingInner(0.1)
    .domain(data.map(yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <>
      <h1 className="title">World Population </h1>
      <div className="dropdown">
        <Dropdown
          options={options}
          id="continent-select"
          selectedValue={selectedValue}
          onSelectedValueChange={setSelectedValue}
        />
      </div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top} )`}>
          {/* x axis ticks */}
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
          />

          {/* y- axis ticks */}
          <AxisLeft yScale={yScale} />

          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            Population
          </text>
          <Marks
            data={data}
            yScale={yScale}
            xScale={xScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
          />
        </g>
      </svg>
    </>
  );
};
