'use client';
import './App.css'
import { useState } from "react";
import Button from  './Components/Button.tsx';
import { Navigate } from 'react-router-dom';
import SN from './assets/SN.jpg'

export default function App() {
  const passKey="5877524"
  const [password,setPassword]=useState("")
  const[isAuth,setAuth]=useState(false)

  const buttonOnClick=(event: React.MouseEvent<HTMLButtonElement>)=>{
    const target = event.target as HTMLInputElement;
    setPassword(password+target.innerText)
  } 
  const verifit=()=>{
    if(password==passKey){
    setPassword("")
    setAuth(true)
  
  }
  else{
    setPassword("")
  }
}
if(isAuth){
  return <Navigate to="/SNV/p"/>
}
return(
  <div className="flex items-center justify-center p-20">
<main className="flex bg-white min-w-96 w-1/2 h-80 overflow-hidden rounded-lg">
  <div className="flex bg-black w-1/2">
    <img src={SN} alt="" />
  </div>
  <div className="bg-[#F4C1C0] w-1/2 grid grid-cols-3 gap-2 p-3 items-center justify-items-center">
    <Button number={'1'} onclick={buttonOnClick}/>
    <Button number={'2'} onclick={buttonOnClick}/>
    <Button number={'3'} onclick={buttonOnClick}/>
    <Button number={'4'} onclick={buttonOnClick}/>
    <Button number={'5'} onclick={buttonOnClick}/>
    <Button number={'6'} onclick={buttonOnClick}/>
    <Button number={'7'} onclick={buttonOnClick}/>
    <Button number={'8'} onclick={buttonOnClick}/>
    <Button number={'9'} onclick={buttonOnClick}/>
  </div>
  <button className="absolute bottom-20 right-32 w-20 h-20 bg-black rounded-xl text-lg text-white hover:bg-[#F4C1C0]" onClick={verifit}>
    OK
  </button>
</main>
</div>
);
}






