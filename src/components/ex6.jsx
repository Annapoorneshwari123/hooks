import React, { useState } from 'react'

function Ex6() {
    const [username, setusername] = useState("");

    const handlerChange = (e) =>{
        console.log(e.target.value);
        setusername(e.target.value)
        
    }
  return (
    <div className='container p-3'>
        <div className="row">
            <div className="col-md-6 m-auto">
                <form action="" className='border p-3 shadow mt-5'>
                    <h1 className="fs-3">Hello 👋, {username?username:"Guest"}</h1>
                    <input type="text" placeholder='Enter your name' className='form-control' value={username} onChange={handlerChange}/>
                    <button className='btn btn-success mt-3'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Ex6