import React, { useState } from 'react'
import Map from './Map';

const MapDetails = ({list}) => {

    const [num , newNum] = useState(0);

    const active = list?.data?.statewise?.[num]?.active;
    const deaths = list?.data?.statewise?.[num]?.deaths;
    const recovered = list?.data?.statewise?.[num]?.recovered;
    const confirmed = list?.data?.statewise?.[num]?.confirmed;
    const lastupdatedtime = list?.data?.statewise?.[num]?.lastupdatedtime;

    const setNum = (state) => {
        const search = state.split(":");
        list?.data?.statewise?.map((value,index) => {
            if(value.state === search[0]) {
                return newNum(index);
            }
            return null;
        });
        // console.log(search[0]);
    }
    return (
        <div className="mapdetails">
             <div className="details">
                 <div className="confirmed">
                     <p>CONFIRMED</p>
                     <p>{confirmed}</p>
                 </div>
                 <div className="active">
                     <p>ACTIVE</p>
                     <p>{active}</p>
                 </div>
                 <div className="recovered">
                     <p>RECOVERED</p>
                     <p>{recovered}</p>
                 </div>
                 <div className="deaths">
                     <p>DECEASED</p>
                     <p>{deaths}</p>
                 </div>
             </div>
            <div className="updates">
                <p>Last Updated</p>
                <p>{lastupdatedtime}</p>
            </div>
            <Map setNum={setNum}/>
        </div>
    )
}

export default MapDetails
