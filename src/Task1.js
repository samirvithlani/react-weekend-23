import React, { useEffect, useState } from 'react'

export const Task1 = () => {
    const [name, setname] = useState(()=>{

        const storedName = localStorage.getItem('name')
        console.log(storedName)
        return storedName? JSON.parse(storedName):null
        
    })
    useEffect(() => {
      localStorage.setItem('name', JSON.stringify(name))
    }, [name])
    
  return (
    <div>
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}} value ={name}/>
        {name}
    </div>
  )
}
