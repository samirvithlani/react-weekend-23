import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const TestApi = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  //const [count, setcount] = useState(0)

  // const increseCount = () => {
  //   setcount(count + 1)
  // }
  useEffect(() => {
    getApi();
    //console.log("useEffect");
    if (loader == false) {
      toast.success('Data loaded...', {
        position: "top-left",
        autoClose: 50,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }, [loader]);

  const deleteUser = async(id)=>{

    var res = await axios.delete("https://node2-rozs.onrender.com/user/user/"+id)
    if(res.status==200){
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
      getApi()
    }
  }
  const getApi = async () => {
    axios.get("https://node2-rozs.onrender.com/user/user").then((res) => {
      // console.log(res.data.data);
      // console.log(res.status);
      if (res.data.data !== null || res.data.data !== undefined) {
        setloader(false);
        setdata(res.data.data);
      }
    });
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* <button onClick={increseCount}>+</button>
    {
      count
    } */}
      {loader ? <h1>loading...</h1> : null}
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">EMail</th>
            <th scope="col">Password</th>
            
            <th scope="col">ACTION</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => {
            return (
              <tr>
                <th scope="row">{d._id}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
        
                <td>
                  <button onClick={()=>{deleteUser(d._id)}} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {
        data?.length===0?<h1>No data found</h1>:null
      }
    </div>
  );
};
