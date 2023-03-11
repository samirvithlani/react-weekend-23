import React, { useState } from 'react'

export const DropDown = () => {
    const [selectedState, setselectedState] = useState()
    const [selectedCity, setselectedCity] = useState()

    var states =[
        {
            "name": "GUJARAT",
        },
        {
            "name": "MAHARASHTRA",
        },
        {
            "name": "RAJASTHAN",
        }
    ]

    var city ={
        "GUJARAT": [
            {
                "name": "AHMEDABAD",
            },
            {
                "name": "SURAT",
            },
        ],
        "MAHARASHTRA": [
            {
                "name": "MUMBAI",
            },
            {
                "name": "PUNE",
            },
        ],
    }
        
    
    const stateHandler = (e)=>{

        setselectedState(e.target.value)
    }
  return (
    <div>
        <select onChange={(e)=>{stateHandler(e)}}>
            {
                states.map((item)=>{
                    return <option>{item.name}</option>
                })
            }
        </select>
        <h1>{selectedState}</h1>
        <select onChange={(e)=>{setselectedCity(e.target.value)}}>
            {
                city[selectedState]?.map((item)=>{
                    return <option>{item.name}</option>
                })
            }
        </select>

            <h1>{selectedCity}</h1>
    </div>
  )
}
