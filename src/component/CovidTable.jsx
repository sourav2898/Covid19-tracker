import React from 'react'

const CovidTable = ({list}) => {
    // console.log(list);
    return (
        <div className="table">
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>STATE/UT</th>
                        <th>CONFIRMED</th>
                        <th>ACTIVE</th>
                        <th>RECOVERED</th>
                        <th>DECEASED</th>
                    </tr>
                </thead>
                <tbody>
                {
                    list?.data?.statewise?.map((value,index) => {
                        if(index === 0) return null;
                        return (
                            <tr key={index}>
                                <td>{value?.state}</td>
                                <td>{value?.confirmed}</td>
                                <td>{value?.active}</td>
                                <td>{value?.recovered}</td>
                                <td>{value?.deaths}</td>
                            </tr>       
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default CovidTable
