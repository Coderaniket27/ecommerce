import React from 'react'
import './indexx.css';
import { useState, useEffect } from 'react'
var an="pune"
function Main() {
    
    const [state, setstate] = useState(1)
    const[data, setdata]= useState({});
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${an}&units=metric&appid=af4dbe1c89701ef694b27d7d0ae00a6b`)
.then(res=>res.json()).then(res=>{console.log(res.weather[0].main);}



    )}, [])
console.log(data)


    return (
        <div>
        <div className="first">iuyiouyiu</div>
        <IMA />
        </div>
    )
}

export default Main

