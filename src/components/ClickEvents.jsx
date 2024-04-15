import React from 'react'
import { useState } from 'react';

const ClickEvents = () => {
  const [name,setName] = useState('Edafe')
    function handleClick(){
        console.log('Hello World');
        }

        // function myName(){
        //     console.log('Bodmas');
        //     }
        
        // function below is for paramether and argument
        let handleClickAgain = function(duration){
            console.log(`you clicked me ${duration}`);
        };

        let changeName
  return (
    <>
    <main className='container my-4 border'>
        <h2 className='text-center'>Click Events in React  </h2>
        <hr />
        <button className="btn btn-primary btn-lg" onClick={handleClick}>Click moi</button>
        {/* <button className='btn btn-success btn-lg' onClick={myName}>Log</button> */}

        {/* the below function is meant to explain how to write a function that has a parameter and an argument */}

<button className="btn btn-danger btn-lg" onClick={()=>handleClickAgain('2x')}>Click again</button>      

{/one more functiion/}
<h2>{name}</h2>
<button className='btn btn-warning btn-lg' onClick={changeName}>Click to change name</button>
    </main> 
    </>
  )
}

export default ClickEvents