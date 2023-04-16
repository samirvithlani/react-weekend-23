import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const AboutUs = () => {

  var user = useContext(AppContext);
  return (
    <div>AboutUs
      {user.name}
    </div>
  )
}
