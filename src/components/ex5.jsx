import React, { useState } from 'react'

function Ex5() {
    const [formdata, setFormData] = useState({
        username:"",
        email:"",
        phonenumber:"",
        password:""
    })
    const handleChange = (e) =>{
        console.log(e.target.name);
        setFormData({
            ...formdata,
            [e.target.name]:e.target.value,//creating property to update 
            // name:value => username:"hello"
        })
    }
   
  return (
    <div className='container p-3'>
        <div className="row">
            <div className="col-md-6 m-auto">
                <h1 className="fs-4">{formdata.username}</h1>
                <h1 className="fs-4">{formdata.password}</h1>
                <h1 className="fs-4">{formdata.email}</h1>
                <h1 className="fs-4">{formdata.phonenumber}</h1>
                <form action="" className='border p-3 shadow mt-5'>
                    <input type="text" placeholder='Enter your name' className='form-control' name='username' onChange={handleChange} value={formdata.username}/>
                    <input type="tel" placeholder='Enter your phonenumber' className='form-control' name='phonenumber' onChange={handleChange} value={formdata.phonenumber}/>
                    <input type="email" placeholder='Enter your email' className='form-control' name='email' onChange={handleChange} value={formdata.email}/>
                    <input type="password" placeholder='Enter your password' className='form-control' name='password' onChange={handleChange} value={formdata.password} />
                    <button className='btn btn-success mt-3'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Ex5