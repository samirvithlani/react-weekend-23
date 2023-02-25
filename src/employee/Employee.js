import React, { useState } from 'react'
import { EmployeeAdd } from './EmployeeAdd';
import { EmployeeList } from './EmployeeList';
import { EmployeeTest } from './EmployeeTest';

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

    const addEmployee = (emp)=>{

            console.log("add emp",emp);
            // employees = [...employees,emp];
            // setemployees(employees);
            setemployees([...employees,emp]);
    }

  return (
    <div>
        
            <h1>EMPLOYEE </h1>
            <EmployeeTest addEmployee  ={addEmployee}/>
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
