import React, { useState } from 'react'

function Ex2() {
  const [formdata,setformdata]=useState({
   username:"",
   password:""
  });

  const handlechange=(e)=>{
    const {name,value}=e.target;
    setformdata((prevdata)=>({...prevdata,[name]:value}))
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('form submitted successfully...!☺️☺️',formdata);
    
  }
  const resetHandler=()=>{
    window.location.reload()
  }
  
  return (
    <div className='container w-50 mt-4 m-auto'>
      <div className="p-3 border shadow">
      <h1>Login</h1>  
      <hr />      
      <form action="" onSubmit={submitHandler}>
       <div className="form-group">
       <label htmlFor="\" className="form-label">Username</label>
       <input type="text" className="form-control" placeholder='Enter your Name' name="username" required value={formdata.username} onChange={handlechange}/>
       </div>
       <div className="form-group">
       <label htmlFor="\" className="form-label">Password</label>
       <input type="password" className="form-control" placeholder='Enter your Password' name="password" required value={formdata.password} onChange={handlechange} />
       </div>
       <br />
      <div className='d-flex gap-3'>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="reset" className="btn btn-dark" onClick={resetHandler}>Reset</button>
      </div>

      </form>
      </div>
    </div>
  )
}

export default Ex2