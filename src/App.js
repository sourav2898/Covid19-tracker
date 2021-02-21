import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Header from './component/Header';
import CovidTable from './component/CovidTable';
import DoughnutChart from './component/DoughnutChart';
import LineChart from './component/LineChart';
import MapHeader from './component/MapHeader';
import MapDetails from './component/MapDetails';
import csv from './result.csv';
import csvToJson from 'convert-csv-to-json';

const App = () => {

  const [list,setList] = useState({});
  // console.log(csv);
  async function getList(){
    const response = await Axios.get("https://api.covid19india.org/data.json");
    setList(response);
  }

  const getJson = () => {
    var lines=csv.split("\n");
    console.log(lines);
    var result = [];

    var headers=lines[0].split(",");
    console.log(headers);
    for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }
    console.log(result);
    console.log(JSON.stringify(result)); //JSON
  }

  useEffect(() => {
    getList();
    getJson();
  }, [])

  return (
    <>
      <Header />
      <div className="chart">
        <DoughnutChart list={list}/>
        <LineChart list={list}/>
      </div>
      <CovidTable list={list}/>
      <MapHeader />
      <MapDetails list={list} />
    </>
  );
}

export default App;