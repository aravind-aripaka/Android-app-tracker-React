import  React, { useState , useEffect } from 'react'

export const Time = () => {
    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div className = "text-sky-400">
            <p> Time : {date.toLocaleTimeString()} Date : {date.toLocaleDateString()} </p>
        </div>
    )
}

export default Time