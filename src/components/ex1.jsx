import React, { useState } from 'react'
import Loading from './loading';

function Ex1() {
    const [count, setCount] = useState(0);

    //we can arrow function to update value of the state
    const incrementHandler = () =>{
        setCount(count + 1);
    }
    const decrementhandler = () =>{
        setCount(count-1)
    }

    //example2
    const [username, setUsername] = useState("kiran");

    const updateToArun = () =>{
        setUsername("Arun")
    }
    const updateToKiran = () =>{
        setUsername("Kiran")
    }

    //example3
    const [isLoading, setisLoading] = useState(false);

    const displayloading = () =>{
        setisLoading(true)
    }
    const hideLoading = () =>{
        setisLoading(false);
    }

    if(isLoading==true){
        return <Loading/>
    }


  return (
    <div className='container p-2 p-md-5'>
        <center>
            <h1 className="fs-1">The use state hook is allows us to manage state of the functional components</h1>
            <p className='fs-5'>The usestate hook we can use only inside the functional components only</p>
            <p>in every use state we have two things one is state another one is state handler</p>
            <p>1) state = it is used to use the state value in our components</p>
            <p>2) state handler = it is sued to set new value or update the value in our functional components</p>
        </center>
        <div className="row">
                <div className="col-md-10 m-auto mb-3">
                    <div className="p-3 border shadow">
                            <h1 className="fs-1">Example1</h1>
                            <hr />
                            <p>we can create one state and we can update the state and we can display the state value in component</p>
                            <h1 className="fs-1">Count = {count}</h1>

                          <div className="d-flex gap-3">
                          <button className="btn btn-primary" onClick={incrementHandler}>Increment count state</button>
                          <button className="btn btn-danger" onClick={decrementhandler}>Decrement count state</button>
                          </div>

                    </div>
                 


                </div>

                <div className="col-md-10 m-auto">
                    <div className="border p-3 shadow bg-white">
                    <h1 className="fs-1">Example2</h1>
                        <hr />
                        <h1 className="fs-4">creating  and updating string usestate</h1>
                        <hr />
                        <h1 className="fs-1">username = {username}</h1>
                        <div className="d-flex gap-2">
                        <button className="btn btn-success" onClick={updateToArun}>Update username to arun</button>
                        <button className="btn btn-primary" onClick={updateToKiran}>Update username to arun</button>
                    </div>
                    <br /><br />

                    {
                        username=="Arun"?(
                            <div className="alert alert-success">
                                <p className="fs-4">hello {username}</p>
                            </div>
                        ):(
                            <div className="alert alert-primary">
                            <p className="fs-4">hello {username}</p>
                        </div>
                        )
                    }
                    </div>
                   
                        
                    </div>

                    <div className="col-md-10 m-auto mt-3">
                        <div className="border p-3 shadow bg-white">
                            <h1 className="fs-1">Displaying and updating the boolean values in usestate</h1>
                            <hr />
                            <p>boolean value we can;t display directly to use boolean values in jsx componnets we need to use ternary operator</p>
                            <hr />
                            <button className='btn btn-primary' onClick={displayloading}>{isLoading==true?"Please wait...":"Submit"}</button>
                            <button className="btn btn-danger" onClick={hideLoading}>Clear loading</button>
                        </div>
                    </div>
        </div>



       {/* {
        isLoading ==true?(
            <div className="loading">
            <img src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif" alt="" />
        </div>
        ):(null)
       } */}

{/* {
        isLoading ==true?(
           <Loading/>
        ):(null)
       } */}
    </div>
  )
}

export default Ex1