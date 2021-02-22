import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Header from './component/Header';
import CovidTable from './component/CovidTable';
import DoughnutChart from './component/DoughnutChart';
import LineChart from './component/LineChart';
import MapHeader from './component/MapHeader';
import MapDetails from './component/MapDetails';

const App = () => {

  const [list,setList] = useState({});
  // console.log(csv);
  async function getList(){
    const response = await Axios.get("https://api.covid19india.org/data.json");
    setList(response);
  }

  const getJson = () => {
    const cjson = require('compressed-json');

    const compressed = cjson.compress(list);
    const restored = cjson.decompress(compressed);

    const compressedString = cjson.compress.toString(list);
    const restoredFromString = cjson.decompress.fromString(compressedString);
    console.log(compressed,"compressed");
    console.log(restored,"restored");
    console.log(compressedString,"compressedString");
    console.log(restoredFromString,"restoredFromString");
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