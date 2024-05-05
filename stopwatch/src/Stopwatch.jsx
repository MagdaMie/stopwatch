import { useEffect, useState } from "react"

const Stopwatch = () => {

    const [elaspsedTime, setElaspsedTime] = useState(10)

    useEffect(() => {
        let stoper
        stoper = setInterval(() => setElaspsedTime(prevTime => {if(prevTime > 0){
          return  prevTime - 1} else if(prevTime === 0) {
            clearInterval(stoper)
            return 0
          } else {
            return 10
          }
        
        }), 1000)

        return () => clearInterval(stoper)
    },
    
    [])


    return(
      <div className="stopwatch-wrap">
        <span className="stopwatch">{elaspsedTime}</span>
      </div>
        
    )
}

export default Stopwatch