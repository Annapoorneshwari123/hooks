import React, { useRef } from 'react'

function Ex10() {
    //create one reference for button
    var button1 = useRef();
    console.log(button1.current);
    const applyStyles = () =>{
        button1.current.style.background = "red";
        button1.current.style.color = "white";
        //we can apply multiple styles after selecting ant jsx tags
    }

    //example2
    var card = useRef();
    const applyStylesToCard = () =>{
        alert(card.current.innerText)
        alert(card.current.innerHTML)
        card.current.style.boxShadow = "0px 0px 10px #ccc";
        card.current.style.padding = "20px";
        card.current.style.backgroundColor = "green";
        card.current.style.color = "white"
    }
  return (
    <div className='container p-4 p-md-5'>
        <center>
        <button ref={button1}>Example button</button> <br />
        <button className='btn btn-success mt-4' onClick={applyStyles}>Apply styles</button>
        </center>
        <hr />
        <h1 className="fs-1">Example2</h1>
        <hr />
        <div ref={card}>
            <h1>heading</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorem, beatae necessitatibus iusto nemo consequuntur sint? Odit labore corrupti officiis? Veritatis quod accusantium dolorem, ipsum doloribus soluta amet suscipit id.</p>
        </div>
        <center>
            <button className="btn btn-success mt-3" onClick={applyStylesToCard}>Apply styles</button>
        </center>
    </div>
  )
}

export default Ex10
