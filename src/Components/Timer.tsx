
import { useState } from "react";

const Timer=()=>{
  const countDownDate = new Date("Feb 14, 2025 11:00:00").getTime();
  const [result,setResult]=useState(" ")
  var x = setInterval(function() {
      const now = new Date().getTime() 
      let distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setResult (days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      if (distance < 0) { 
          clearInterval(x);
          setResult("Querida Maria sal  a ver tu sorpresa por tu ventana")
       }
      }, 1000);
  return(
      <div className="flex justify-center ">
          <span className="text-5xl text-pink-400 font-bold">
              {result}
          </span>
      </div>
  )
}
export default Timer
