import React from 'react'
import useProps from './hooks/useProps'

export const CutomeHookTest = () => {

    const {toUpper,error} = useProps()

  return (
    <div>
        <h1>{toUpper("a")}</h1>
        <h1>{error}</h1>
    </div>
  )
}
