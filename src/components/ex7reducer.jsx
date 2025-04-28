import React, { useReducer, useState } from 'react'

function Ex7() {
    //exampl1
    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter+1);
    }
    const decrement = () =>{
        setCounter(counter-1)
    }


    //example2
      /* const [state,dispatcher] = useReducer(reducer,initialstate or InitialValue)

    State = Is used for declare variables or state
    dispatcher = 1) Is used for call state Object.
                2) Helps to passing an action constants through dispatcher
    reducer = 1) Is a function, is used for handle the actions. 
                2) Action is used for to determine what kind of action try to take which logic need to perform */

    const reducer = (states, action) =>{
        console.log(states.count);
        console.log(action.type);
        switch(action.type) {
            case "increment" :
                return {...states, count:states.count + 1}
            case "ToggleLoading" :
                return {...states, isLoading:true};
            case "decrement":
                return {...states, count:states.count-1}
        }
    }
    const [state, dispatcher] = useReducer(reducer, {count:0, isLoading:false})
  return (
    <section className="container p-3 p-md-5">
          <div className="row">
                <div className="col text-center">
                <h5 className="display-3 text-success">useReducer Hook</h5>
                <p className="text-secondary">
                    useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
                </p>
                <p className="text-secondary">useReducer also lets you optimize performance for components that trigger deep updates.</p>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-10">
                        <div className="border p-3 shadow">
                            <h1 className="fs-1">Example1</h1>
                            <hr />
                            <h1 className="fs-1 text-primary mt-3">Counter = {counter}</h1>
                            <button className="btn btn-primary" onClick={increment}>Increment</button>
                            <button className="btn btn-danger mx-3" onClick={decrement}>Decrementy</button>
                        </div>
                    </div>
                    <div className="col-md-10 mt-4">
                        <div className="border p-3 shadow">
                            <h1 className="fs-1">Example2</h1>
                            <hr />
                            <h1 className="fs-1">Count = {state.count}</h1>
                            <h1 className="fs-1">{state.isLoading==true? "Please wait...":"Next"}</h1>
                            <button className="btn btn-primary" onClick={()=>{
                                dispatcher({type:'increment'})
                                dispatcher({type:'ToggleLoading'})
                            }}>Increment</button>
                            <button className="btn btn-danger mx-3" onClick={()=>dispatcher({type:"decrement"})}>Decrementy</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Ex7