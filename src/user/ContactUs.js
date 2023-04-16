import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context';

export const ContactUs = () => {
    var user = useContext(AppContext);
    var contactperson = [
        {
            name: "Raj",
            no: "1234567890",
        },
        {
            name: "AMIT",
            no: "8460224296",
        }

    ]
  return (
    <div>ContactUs
        {user.name}
        <br></br>
        {
            contactperson.map((cp)=>{
                return(
                    <ul>
                        <li>
                            <Link to = {`/user/contactus/${cp.name}`}>{cp.name}</Link>
                        </li>
                    </ul>
                )
            })
        }


    </div>
  )
}
