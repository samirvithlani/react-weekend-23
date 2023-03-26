import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddEmployee } from './employeeService'

export const RegisterEmployee = () => {


    var navigate = useNavigate()
    const mutation = useAddEmployee()
    useEffect(() => {
      
        console.log(mutation.data)
        console.log(mutation.isLoading)
        console.log(mutation.error)
        if(mutation.isSuccess){
            navigate("/user/aboutus")
        }
      
    }, [mutation.isLoading])
    
    const submit = () =>{
    var data ={
        name:"adheera",
        email:"adheera@gmail.com",
        password:"adheera@123",
        age:23,
        isMarried:false,
    }
        mutation.mutate(data)
        var res = mutation.data
        console.log(res)
        console.log("is loading......",mutation.isLoading)
        console.log("error.....",mutation.error)
        console.log("is success.....",mutation.isSuccess)
        
    }


  return (
    <div>
        <h1>Register Employee</h1>
        <button onClick={()=>{submit()}}>ADD DATA</button>

    </div>
  )
}
