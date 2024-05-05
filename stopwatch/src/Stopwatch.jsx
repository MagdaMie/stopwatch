import { useEffect, useState } from "react"

const Stopwatch = () => {

    const [elaspsedTime, setElaspsedTime] = useState(10)

    useEffect(() => {
        let stoper
        stoper = setInterval(() => setElaspsedTime(prevTime => {if(prevTime > 0){
          return  prevTime - 1} else {
            return 10
          }
        
        }), 1000)

        return () => clearInterval(stoper)
    },
    
    [])


    return(
        <p>{elaspsedTime}</p>
    )
}

export default Stopwatch