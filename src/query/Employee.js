import React, { useEffect } from 'react'
import { useFetchEmployees } from './employeeService'

export const Employee = () => {

//    const {data,isLoading,error,refetch} = useFetchEmployees()
const res = useFetchEmployees()
    useEffect(() => {
    
        console.log(res.data)
        console.log(res.isLoading)
        console.log(res.error)
    }, [res.isLoading])
    
  return (
    <div>
        {res.isLoading && <h1>Loading...</h1>}
        <button onClick={res.refetch}>Fetch Employees</button>
    </div>
  )
}
