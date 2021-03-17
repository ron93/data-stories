import React from "react"
import {  scaleBand, scaleLinear, max  } from "d3";

import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 70, left: 200 };

const yValue = d => d.Country;
const xValue =  d => d.Population;

export const Stories = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

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
      
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top} )`}>
          {/* x axis ticks */}
          <AxisBottom xScale={xScale} innerHeight={innerHeight} />

          {/* y- axis ticks */}
          <AxisLeft yScale={yScale} />

          <text className="axis-label" x={innerWidth / 2} y={innerHeight +55} textAnchor="middle">World Population</text>
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
  );
};
