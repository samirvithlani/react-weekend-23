import React from 'react'
import { useParams } from 'react-router-dom'

export const Contact = () => {
    var name = useParams().name
  return (
    <div>
        <h1>THANKS FOR CONTACTING  {name}</h1>
    </div>
  )
}
