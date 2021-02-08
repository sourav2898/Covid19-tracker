import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = ({list}) => {
    const active = list?.data?.statewise?.[0]?.active;
    const deaths = list?.data?.statewise?.[0]?.deaths;
    const recovered = list?.data?.statewise?.[0]?.recovered;
    const confirmed = list?.data?.statewise?.[0]?.confirmed;
    const data = {
        labels:["active","deceased","recovered"],
        datasets:[
            {
                data: [active,deaths,recovered],
                backgroundColor: [
                    "blue",
                    "gray",
                    "green"
                ],
                borderWidth: 0.5,
            },
        ],
        backgroundColor : "#fff"
    }

    const options = {
        legend:{
            display: false
        },
        title:{
            display: true,
        }
    }

    return (
        <div className="doughnut">
            <Doughnut data={data} options={options} />
            <div className="confirmed">
                <p>{confirmed}</p>
                <p>Confirmed</p>
            </div>
            <div className="labels">
                <p><span className="active"></span> active : {active}</p>
                <p><span className="deceased"></span> deceased : {deaths}</p>
                <p><span className="recovered"></span> recovered : {recovered}</p>                                
            </div>
        </div>
    )
}

export default DoughnutChart
