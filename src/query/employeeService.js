import axios from "axios"
import { useQuery } from "react-query"

const fetchEmployees =() =>{
    //return axios.get("https://node2-rozs.onrender.com/user/user")
    return axios.get("http://localhost:3001/user/user",{
        headers: {
            'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJwcml0IiwiZW1haWwiOiJwcml0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicHJpdEAxMjMiLCJhZ2UiOjI4LCJpc01hcnJpZWQiOmZhbHNlLCJfaWQiOiI2NDFlODMzZThhYTkyZGQ3ZjExY2ExNzAiLCJfX3YiOjB9LCJpYXQiOjE2Nzk3MjEyNzgsImV4cCI6MTY3OTcyNDg3OH0.N2vGmvwDfFICexvBUwQIlSEHZ5Yjzh1z5ShTHokjLo4"
        }
    })
}

export const useFetchEmployees  = ()=>{

    return useQuery("employees",fetchEmployees,{
        enabled: false,
        refetchOnMount: false,
        retry:10,
        retryDelay: 100,
    })
    
}

