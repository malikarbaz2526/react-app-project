import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Content from './Components/Content'
import { data } from "./Components/Dat"
import Logindata from './Logindata' 
import {useState} from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
//   const [products,setProducts] = useState("")
//  function setdata(e){
//   console.log(e)
//   const alldata =[e, ...products]
//   setProducts(alldata)
//  }
  const [names,setNames] = useState(data)
 const [modes,setModes] = useState("light")
 const [toggle,setToggle] = useState("off")
 const [modechange,setModechange]=useState("light")
 const [theme,setTheme] = useState("bg-color")
 

function darkmode(){
  if(modes =="light"){
    setModes("dark")
    setToggle("on")
    setModechange("dark")
    setTheme("bg-color1")
   
  }
  else{
    setModes("light")
    setToggle("off")
    setModechange("light")
    setTheme("bg-color")
    
  }
  }
 var product = names.map((item)=>{
    return <Content key={item.id} change={modechange} data={item}/>
  })

  return (
   <React.Fragment>
      <BrowserRouter>
      <div className={`${theme}`}>
   <Navbar data0={modes} data1={darkmode} data2={toggle}/>
   <Routes>
    <Route exact path="/" element={<div className={`row`} >{product}</div>}/>
    <Route exact path="/about" element={<Login/>}/>
   </Routes>
    </div>
    </BrowserRouter>
          

     
    {/* <div className={`${theme}`}>
   <Navbar data0={modes} data1={darkmode} data2={toggle}/> */}
   {/* <div className={`row`} >{product}</div> */}
   {/* <Login/> */}
  
   {/* </div> */}
   </React.Fragment>
  )
}

export default App