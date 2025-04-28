import React, { createRef, use, useState } from 'react'

function Ex9() {
    const [user, setuser] = useState({
        username:"",
        email:""
    })
    //example1
    //creating reference for input tag

    var usernameInput = createRef();

    const submithanlder1 = () =>{
        console.log(usernameInput.current.placeholder);
        console.log(usernameInput.current.value);
    }

    var emailInputreference = createRef();

    const submithanlder2 = () =>{
        console.log(emailInputreference.current.value);
        
    }

    const finalSubmitHandler = () =>{
        // let newuser = {
        //     username:usernameInput.current.value,
        //     email:emailInputreference.current.value
        // }
        // console.log(newuser);

        setuser({...user, username:usernameInput.current.value, email:emailInputreference.current.value})
    }


  return (
    <section className="container p-3 p-md-5">
          <div className="row">
                <div className="col text-center">
                    <h5 className="display-5">useRef & createRef Hook</h5>
                </div>
                <hr />
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                        <h3 className="text-warning">createRef Example..!</h3>
                        <hr />
                        <p>
                                    <b>Note : </b>
                                    createRef will always create a new ref
                                    <b>
                                        functional components <br />
                                        (REF = A ref is a plain JS object. React elements via the
                                        ref attribute)
                                    </b>
                                  <p>
                                  . In a class-based component, you would typically put the ref
                                    in an instance property during construction (e.g. this.input =
                                    createRef()). (Used In Class Component)
                                  </p>
                                </p>
                        </div>
                        <div className="card-body">
                            <h1>Example1 = input value = {user.username}</h1>
                            <hr />
                            <input type="text" placeholder='Enter username' className='w-25 form-control' ref={usernameInput}/>
                            <button className='btn btn-success' onClick={submithanlder1}>Submit</button>
                        </div>

                        <div className="card-body">
                            <h1>Email = {user.email}</h1>
                            <input type="email" ref={emailInputreference} placeholder='Enter your email' className='form-control w-50' />
                            <button className="btn btn-success mt-2" onClick={submithanlder2}>Submit</button>
                        </div>

                        <button className="btn btn-danger w-50" onClick={finalSubmitHandler}>Create account</button>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Ex9