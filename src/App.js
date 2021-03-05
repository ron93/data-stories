import './App.css';
import './index.css';
import React, { useState } from 'react';
import * as d3 from "d3";
const csvUrl = 'https://gist.githubusercontent.com/ron93/5dc8ba74aa1de5a1c4c3052b250c6d8f/raw/837e10f92a55cbc58878daa6143c033b075ef933/cssNamedColors.csv';

const message = data =>{
  let message = '';
  message = message + data.length + 'rows\n';
  message = message + data.columns.length + 'columns';
  return message;
};

 export const App=()=> {
  const [data, setData ] = useState(null);

  d3.csv(csvUrl).then(data =>{
    setData(data);
  });
  return (<div>Data is :{data ? message(data):'Loading...'} </div>);
}

//export default App;
