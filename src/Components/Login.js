import React, { useState } from "react"
function Signin(props) {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pwd,setPwd] = useState("")
  const [display,setDisplay] = useState([])
 
  function Login(){
    var newdata={
      name,
      email,
      pwd
     
    }
    setDisplay([...display,newdata])

   
    
    console.log(display)
  }


  return (
    <>
<form className="container mt-4" >

  <h3 className="text-center text-muted">Login Form </h3>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name}  onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={pwd} onChange={(e)=>setPwd(e.target.value)} id="exampleInputPassword1"/>
  </div>
 
  <button type="button" className="btn btn-primary text-center px-5 fs-5" onClick={Login}>Submit</button>
</form>

<div>
  {display.map((item)=>{
    return (
      <div className="container d-flex flex-column justify-content-around ">
      <div className="d-flex container justify-content-around bg-primary py-2 m-2">
        <h3 className="text-capitalize rounded-circle bg-warning text-light px-3 py-2">{item.name.substr(0,1)}</h3>
        <h4 className="text-light mt-2">{item.name}</h4>
        <h5 className="mt-2 text-light">{item.email}</h5>
        <h6 className="mt-3 text-light">{item.pwd}</h6>
      </div>
      </div>
    )
  })}
</div>

</>
   
  )
}

export default Signin