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

  async function getList(){
    const response = await Axios.get("https://api.covid19india.org/data.json");
    setList(response);
  }

  useEffect(() => {
    getList();
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