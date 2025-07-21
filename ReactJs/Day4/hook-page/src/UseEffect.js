import {useState,useEffect} from 'react'

export default function UseEffect(){
    const [seconds,setSeconds] = useState(0);

    useEffect (() => {
        // setInterval is called tto increment by 1 every seconnd
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        },1000)

        // cleanup function to clear the timer when the component unmounts
        return () => clearInterval(timer); 
    }, );


return(
    <div style={{textAlign:"center", padding:"20px"}}>
        <h1>Timer example of useEffect</h1>
        <p>Seconds: {seconds}</p>
    </div>
)
}