import axios from 'axios'
import React from 'react'

export const PostApiTest = () => {

    const postData = async () => {

        var data = {
            name: "SACHIN",
            email:"sachin@gmail.com",
            age:25,
            password:"123456",
            isActive:true
        }
        axios.post("http://localhost:3001/user/user",data).then(res=>{
            console.log(res.data)
        })


    }
  return (
    <div>
        <h1>Post Api Test</h1>
        <button onClick={postData}>Post Data</button>
    </div>
  )
}
