import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = ({list}) => {
    
    const arr = list?.data?.cases_time_series;
    let n = arr?.length;
    let active = [];
    let deceased = [];
    let recovered = [];
    if(n>5){
        active = [arr[n-1]?.dailyconfirmed,arr[n-2]?.dailyconfirmed,arr[n-3]?.dailyconfirmed,arr[n-4]?.dailyconfirmed,arr[n-5]?.dailyconfirmed];
        deceased = [arr[n-1]?.dailydeceased,arr[n-2]?.dailydeceased,arr[n-3]?.dailydeceased,arr[n-4]?.dailydeceased,arr[n-5]?.dailydeceased];
        recovered = [arr[n-1]?.dailyrecovered,arr[n-2]?.dailyrecovered,arr[n-3]?.dailyrecovered,arr[n-4]?.dailyrecovered,arr[n-5]?.dailyrecovered];
        
        
            const data = {
                labels:[" "," "," "," "," "],
                datasets:[
                    {
                        data:active,
                        borderColor: ["blue"],
                        fill: false,
                    },
                    {
                        data:recovered,
                        borderColor: ["green"],
                        fill: false,
                    },
                    {
                        data:deceased,
                        borderColor: ["gray"],
                        fill: false,
                    },
            ]
        }
        
        const options = {
            legend:{
                display:false
            },
            scales: {
                yAxes: [{
                    display:false,
                    gridLines: {
                        display: false,
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
            }
        }
        
        return (
            <div className="line">
                <Line data={data} options={options} />
            </div>
        )
    }
    return null;
}

export default LineChart
