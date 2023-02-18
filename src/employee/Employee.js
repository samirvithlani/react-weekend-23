import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList';

export const Employee = (props) => {

    var [employees, setemployees] = useState(
        [
            {
                id: 1,
                name: "John",
                age: 30,
            },{
                id: 2,
                name: "Mary",
                age: 25,
            },
            {
                id: 3,
                name: "Peter",
                age: 28,
            }
        ]
    )
    
    console.log(employees);
    const deleteEmployee= (id)=>{

        employees = employees.filter((emp)=>{
            return emp.id !== id;
        })
        console.log(employees);
        setemployees(employees);

    }

  return (
    <div>
        
            <h1>EMPLOYEE </h1>
            <EmployeeList employees = {employees} delete ={deleteEmployee}/>
            {/* {
                employees.map((emp)=>{
                    return(
                        <ul>
                            <li>{emp.id}</li>
                            <li>{emp.name}</li>
                            <li>{emp.age}</li>
                        </ul>
                    )
                })
            } */}

    </div>
  )
}
