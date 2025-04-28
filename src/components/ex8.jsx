import React, { useReducer } from 'react'

function Ex8() {
    const reducerFunction = (states, action) =>{
        console.log(states);
        console.log(action.logic);
        switch(action.logic) {
            case "top" :
                if(states.top<=280){
                    return {...states, top:states.top+10}

                }else{
                    return {...states, top:states.top}
                }
            case "bottom" :
                    if(states?.top>0){
                        return {...states, top:states?.top-10}
                    }else{
                        return {...states, top:states.top}
                    }
                    break;
                    
            
            case "left" :
               if(states.left<=280){
                return {...states, left:states.left+10}
               }else{
                return {...states, left:states.left}
               }
            
            case "right" :
                 if(states?.left>0){
                    return {...states, left:states.left-10}
                 }else{
                    return {...states, left:states.left}
                 }
        }
        
    }
    const [state, dispatcher] = useReducer(reducerFunction, {
        left:0,
        top:0,
    })
  return (
 <section className="container">
    <div className="box">
        <div className="object" style={{transform:`translateY(${state?.top}px) translateX(${state?.left}px)`}}></div>
    </div>
    <div className="d-flex justify-content-center my-2">
    <button className="btn btn-primary" onClick={()=>dispatcher({logic:"top"})}>top</button>
    </div>
    <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary" onClick={()=>dispatcher({logic:'left'})}>left</button>
        <button className="btn btn-primary" onClick={()=>dispatcher({logic:'right'})}>right</button>
       
    </div>
    <div className="d-flex justify-content-center mt-2">
    <button className="btn btn-primary" onClick={()=>dispatcher({logic:'bottom'})}>bottom</button>
    </div>
 </section>
  )
}

export default Ex8