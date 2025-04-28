import React, { useState } from 'react'

function Ex3() {
    const [user, setUser] = useState({
        username:"Arun kumar",
        email:"arun@gmail.com",
        phonenumber:"+91873786363",
        age:20,
        hobbies:["coding", "racing", "reading books"],
        accountDetails:{
            bankName:"HDFC",
            accountNumber:"AC89278762622",
            balance:1000
        },
        address:{
            city:"bangalore",
            pincode:562107
        },
        profile:"https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png"
    })

    //updating the objcet use state
    // const updateuser = () =>{
    //     setUser({
    //         ...user,
    //         username:"Kiran"
    //     })
    // }

    const updateuser = () =>{
        setUser({
            ...user, //we are getting and placing all prev user properties
            username:"Kiran",
            age:56,
            accountDetails:{
                bankName:"SBI",
                accountNumber:"AC9562768767",
                balance:78000
            },
            phonenumber:"+9283765634",
            hobbies:["coding", "racing", "reading books", "Gaming", "Cycling", "Eating"],
        })
    }
  return (
   <section className="container">
    <div className="row">
        <div className="col-md-10">
            <div className="border shadow p-3">
                <h1>Creating objcets in usestate and displaying and updating</h1>
                <hr />
                <div className="border bg-white p-3">
                   <div className="d-flex align-items-center gap-3">
                   <img src={user.profile} className='rounded-circle border border-3 border-primary p-2' width={60} alt="" />
                   <div>
                    <h1 className="fs-5 m-0">{user.username}</h1>
                    <p className="fs-6 text-secondary m-0">{user.email}</p>
                   </div>
                   
                   </div>
                   <hr />
                   <p className="fs-6"><b>Phone number:</b> {user.phonenumber}</p>
                   <p className="fs-6"><b>Age:</b> {user.age}</p>
                   <p className="fs-6">Hobbies: </p>
                 <div className="d-flex gap-2">
                    {
                    user.hobbies.map((item, index)=>(
                        <button className="btn btn-outline-dark btn-sm rounded-pill">{item}</button>
                    ))
                    }
                 </div>
                 <hr/>
                 <br/>
                  <p className="fs-6">Bank Details</p>
                <div className="table-container ">
                <table className='w-100'>
                    <tr className='bg-primary text-white'>
                        <th>Bank Name</th>
                        <th>AccountNumber</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>{user.accountDetails.bankName}</td>
                        <td>{user.accountDetails.accountNumber}</td>
                        <td>{user.accountDetails.balance}</td>
                        <td className='d-flex gap-2'>
                        <button className="btn btn-success btn-sm">Activate</button>
                        <button className="btn btn-danger btn-sm">Deactivate</button>
                        </td>
                    </tr>
                </table>
                </div>
                <div className="d-flex gap-3">
                    <button className="btn btn-success mt-3" onClick={updateuser}>Update the user</button>
                </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Ex3