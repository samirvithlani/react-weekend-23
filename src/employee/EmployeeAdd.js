import React, { useState } from 'react'

export const EmployeeAdd = (props) => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const nameHandler= (e)=>{
       // console.log(e.target.value);
        setname(e.target.value);
    }
    const submit = (e)=>{

            e.preventDefault();
            console.log(name);
            console.log(age);
            var data = {
                name: name,
                age: age,
            }
            props.addemp(data);
            
    }
  return (
    <div>
        <form onSubmit={submit}>
            <div>
                <label>NAME</label>
                <input type="text" onChange={(e)=>{nameHandler(e)}}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" onChange={(e)=>{setage(e.target.value)}}></input>
            </div>
            <div>
                
                <input type="submit" value="submit"></input>
            </div>

        </form>
    </div>
  )
}
