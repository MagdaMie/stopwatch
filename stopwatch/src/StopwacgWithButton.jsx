import { useEffect, useState } from "react"

const StopwachWithButton = () => {
    const [timeToElapse, setTimeToElapse] = useState()

    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        let stoper
        if(isOn === true) {
            stoper = setInterval(() => setTimeToElapse(prevTime => {if(prevTime > 0){
                return  prevTime - 1} else if(prevTime === 0) {
                  clearInterval(stoper)
                  return 0
                } 
              
              }), 1000)
      
              return () => clearInterval(stoper)
        }
        
    },
    
    [])

 


    return(
        <div>
            <input type="text" onChange={e => setTimeToElapse(e.target.value)}/>
            <button onClick={() => setIsOn(true)}>Start</button>
             <div className="stopwatch-wrap" style={{backgroundColor: timeToElapse===0? 'yellow' : 'transparent', color:timeToElapse===0? 'black' : 'white'}}>
                <span className="stopwatch">{timeToElapse}</span>
            </div>

        </div>
       
    )
}

export default StopwachWithButton