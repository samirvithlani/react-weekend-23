import React from 'react'
import { useParams } from 'react-router-dom'

export const FeedBack = () => {

    //fetch the id from the url usinf router
    var id = useParams().id;
    

  return (
    <div>FeedBack
        <div>{id}</div>

    </div>
  )
}
