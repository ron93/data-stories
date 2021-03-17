import React, { useState, useCallback, useEffect } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";
import ReactDOM from "react-dom";
import "./index.css";

const csvUrl =
  "https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv";
const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  console.log("ticks", xScale.ticks());
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top} )`}>
       
       {/* x axis ticks */}
       {xScale.ticks().map((tickValue) => (
          <g transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text dy="0.71em" style={{textAnchor:'middle'}} y={innerHeight+ 4}>{tickValue}</text>
          </g>
        ))}

        {/* y- axis ticks */}
        {yScale.domain().map((tickValue) => (
          <g transform={`translate(0,${yScale(tickValue)})`}>
            <text >
            {tickValue}
           </text>
          </g>
        ))}

        {data.map((d) => (
          <rect
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
