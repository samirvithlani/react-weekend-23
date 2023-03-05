import axios from "axios";
import React, { useState } from "react";

export const TestApi = () => {
  const [data, setdata] = useState([]);
  const getApi = async () => {
    axios.get("http://localhost:3001/user/user").then((res) => {
      console.log(res.data.data);
      console.log(res.status);
      setdata(res.data.data);
    });
  };
  return (
    <div>
      <button onClick={getApi}>Get Api</button>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First_name</th>
            <th scope="col">Last_name</th>
            <th scope="col">EMAIL</th>
            <th scope="col">AVATAR</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => {
            return (
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.email}</td>
                <td>
                    <img src={d.avatar}></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
