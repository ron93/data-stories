import React, { useState, useCallback, useEffect } from 'react';
import { csv, arc, pie, scaleBand, scaleLinear, max } from 'd3';
import ReactDOM from 'react-dom';

const csvUrl =
  'https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv'
const width = 960;
const height = 500;
const margin = { top: 20 , right: 20, bottom: 20, left:20 };

export const App = () => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const row = d =>{
    	d.Population = +d['2020'];
    	return d;
    };
    csv(csvUrl, row ).then(data => {
      setData(data.slice(0,10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0])

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

	const yScale = scaleBand()
  	.domain(data.map(d => d.Country))
  	.range([0,innerHeight]);

  const xScale = scaleLinear()
  	.domain([0, max(data, d => d.Population)])
  	.range([0,innerWidth]);
  return (
    <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top} )`}>

        {data.map(d =>(
           <rect x={0} 
           y={yScale(d.Country)} 
           width={xScale(d.Population)} 
           height={yScale.bandwidth()}
           />
            ))}   
             </g>
             </svg>   
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// To compute the arcs manually (without d3.pie):
// data.map((d, i) => (
//   <path
//     fill={d['RGB hex value']}
//     d={pieArc({
//       startAngle: (i / data.length) * 2 * Math.PI,
//       endAngle: ((i + 1) / data.length) * 2 * Math.PI
//     })}
//   />
// ))
