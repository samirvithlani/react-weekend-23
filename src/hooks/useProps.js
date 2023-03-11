import { useState } from "react"

export default function useProps() {

    const [error, seterror] = useState('')
    function toUpper(str){
        if(typeof str == "string"){
            return str.toUpperCase()
        }
        else{
            seterror("check  data type..")
        }
        
    }

    return{
        toUpper,error
    }

}