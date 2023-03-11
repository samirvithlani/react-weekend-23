import axios from 'axios'
import React from 'react'

export const DleetApi = () => {

    const deleteApi = (id)=>{
        
        axios.delete("https://reqres.in/api/users/"+id).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
            <button onClick={()=>deleteApi(2)}>Delete</button>

    </div>
  )
}
