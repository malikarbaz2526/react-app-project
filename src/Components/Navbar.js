import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(props) {
  // console.log(props.data)
  // console.log(props.data1)
  // console.log(props.data2)


  return (
   <>
<nav className={`navbar border-bottom navbar-expand-md navbar-${props.data0} `} style={{backgroundColor:props.data0==='light'?'white':'black'}}>
  <div className="container-fluid">
    <a className="navbar-brand fs-2 " href="#"><span className='text-warning fw-bold'>C</span><span  className="text-success">E</span><span className='text-warning'>SC</span><span  className='text-success'>A</span></a>
    <ul className='navbar-nav ms-auto me-2 mode1'>
        <li className="nav-item" >
        <a className="nav-link active fs-5"><i class={`bi bi-toggle-${props.data2}`} onClick={props.data1}></i></a>
        </li>
      </ul>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-5"  to="/" >Produts</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active fs-5" to="/about">Sign In</Link>
        </li>
      </ul>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0 mode2'>
        <li className="nav-item" >
        <a className="nav-link active fs-5"><i class="bi bi-toggle-on" onClick={props.data1}></i></a>
        </li>
      </ul>
      <form className="d-flex p-2">
        <input className="ps-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn " type="submit">Search</button>
      </form>
     
    </div>
    
   
  </div>
</nav>


   </>
  )
}

export default Navbar
   