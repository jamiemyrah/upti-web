import React, { Component } from 'react'
import{ Link } from "react-router-dom"

export default class Login extends Component {
  render() {
    return (
     <div className="d-flex align-items-center justify-content-center ">
     <div className='text-center container'>
        <h4 className='my-5'>Login with facebook</h4>
        <div className=' '>
          <input type="text" placeholder='Enter  your First name' className="w-50" /><br/>
         <input type="text" placeholder='Enter  your Last name' className="w-50 my-4" /><br/>
         <input type="text" placeholder='Enter  your password' className="w-50" /><br/>
          
         <Link className='btn btn-success mt-4 w-50' to={'/Dashboard'} children={"submit"}></Link>
        
        </div>
           
        </div>  
     
        </div>
          
      
    )
  }
}
