import React from "react";

export const EmployeeList = (props) => {
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      {/* <button className="btn btn-primary" onClick={()=>{props.test(12)}}>TEST</button> */}
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.employees?.map((emp) => {
            return (
              <tr>
                <th scope="row">{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>
                  <button onClick={()=>{props.delete(emp.id)}} className="btn btn-primary">DELETE</button>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
      <span>
            {
              props.employees?.length === 0 ? <h1>NO DATA</h1> : null
            }
          </span>
    </div>
  );
};
