import React, { useState } from 'react'
import "./Content.css"



function Content(props) {

// const [mystyle,setMystyle] = useState(styling)
// const styling=[
//   {backgrondColor:black}
// ]
    console.log(props)
  return (
    <>
   
  {/* <div className='container col-lg-3 col-md-4 col-sm-6 col-8'>
      <div className="containers box d-flex flex-column  align-items-center">
        
        {/* <h1>{props.data.name}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.price}</h3> */}
   
    <div className={` border-0 container container1 col-lg-3 col-md-4 col-sm-6 col-8 mt-2 p-2 ${props.change} `}  >
    <div className="containers box d-flex flex-column container2 align-items-center shadow-sm ">
          <div className="card-body text-center">
          <img src={props.data.img} alt="" />
            <h2 className="product-name">
              <a href="#">{props.data.name}</a>
            </h2>
            <div className="rating">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
            <h2 className="price">{props.data.price}</h2>
            <div className="btns d-flex justify-content-between">
              <a href="#" className="add-to-cart-btn">
                <i className="bi bi-cart4 me-1"></i>
                Add to Cart
              </a>
              <a href="#" className="add-to favorite mt-1 fs-4 ms-3">
              <i className="bi bi-heart"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
   
  
    
    </>
  )
}

export default Content