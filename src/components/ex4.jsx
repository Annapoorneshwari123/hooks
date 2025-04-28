import React, { useState } from 'react'

function Ex4() {
    const [colors, setColors] = useState(["red", "green", "blue", "yellow", "orange"]);
    const updateColors = () =>{
        setColors([...colors, "pink"])  
    }

    //example2
    const [allusers, setAllusers] = useState([
        {
            username:"Arun kumar",
            email:"arun@gmail.com",
            phonenumber:"+91873786363",
            age:20,
            hobbies:["coding", "racing", "reading books"],
            accountDetails:{
                bankName:"HDFC",
                accountNumber:"AC89278762622",
                banlance:1000
            },
            address:{
                city:"bangalore",
                pincode:562107
            },
            profile:"https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png"
        },

        {
            username:"Kiran kumar",
            email:"kiran@gmail.com",
            phonenumber:"+91873786363",
            age:20,
            hobbies:["coding", "racing", "reading books"],
            accountDetails:{
                bankName:"HDFC",
                accountNumber:"AC89278762622",
                banlance:1000
            },
            address:{
                city:"bangalore",
                pincode:562107
            },
            profile:"https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png"
        },
        {
            username:"varun",
            email:"arun@gmail.com",
            phonenumber:"+91873786363",
            age:20,
            hobbies:["coding", "racing", "reading books"],
            accountDetails:{
                bankName:"HDFC",
                accountNumber:"AC89278762622",
                banlance:1000
            },
            address:{
                city:"bangalore",
                pincode:562107
            },
            profile:"https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png"
        }
    ])

    const updateAllUsers = () =>{
        const newUser = {
            username:"Tarun",
            email:"arun@gmail.com",
            phonenumber:"+91873786363",
            age:20,
            hobbies:["coding", "racing", "reading books"],
            accountDetails:{
                bankName:"Karnataka Bank",
                accountNumber:"AC89278762622",
                banlance:1000
            },
            address:{
                city:"bangalore",
                pincode:562107
            },
            profile:"https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png"
        }
        setAllusers([...allusers,newUser ])
    }
  return (
    <section className="container">
    <div className="row">
        <div className="col-md-10">
            <div className="border shadow p-3">
                <h1>Creating Arrays in usestate and displaying and updating like adding new values to that array</h1>
                <hr />
               
               <div className="border p-3">
                <p className="fs-6">Displaying all color values from colors usestate</p>
                <hr />
                <div className="d-flex gap-3 flex-wrap">
                {
                    colors.map((item, index)=>(
                        <button className="btn text-white" style={{backgroundColor:item}} key={index}>{item}</button>
                    ))
                }
                </div>

                <button className="btn-primary btn mt-4" onClick={updateColors}>Update the colors</button>
                <hr />
                <br />
                <p className="fs-6">Displaying all users state</p>
                <hr />
                <table className='w-100'>
                    <tr className='bg-primary text-white'>
                        <th>Bank Name</th>
                        <th>AccountNumber</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                {
                    allusers.map((item, index)=>(
                        <tr>
                        <td>{item.accountDetails.bankName}</td>
                        <td>{item.accountDetails.accountNumber}</td>
                        <td>{item.accountDetails.banlance}</td>
                        <td className='d-flex gap-2'>
                        <button className="btn btn-success btn-sm">Activate</button>
                        <button className="btn btn-danger btn-sm">Deactivate</button>
                        </td>
                    </tr> 
                    ))
                }
                </table>
                <br />
                <button className="btn btn-primary" onClick={updateAllUsers}>Update the all users state</button>
               </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Ex4