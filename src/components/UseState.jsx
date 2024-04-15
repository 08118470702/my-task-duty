import React from "react";
import { useState } from "react";

const UseState = () => {
    const [name,setName] = useState("Steff");
    const [age,setAge] = useState(50);
    const [gender ,setGender] = useState('female')
//   let name = "Steff";
//   let age = 50;
//   let gender = "female";
  function changeDetails(){
    setName('Layefa');
    setGender('male');
    setAge(100)
  }
  return (
    <>
      <main className="container my-4 border">
        <h1 className="text-center">Usestate Basics</h1>
        <hr />
        <h4>
          My name is {name}, I am {age} years old and a{gender}.
        </h4>
        <button className="btn btn-warning btn-lg" onClick={changeDetails}>
            change details
        </button>
      </main>
    </>
  );
};

export default UseState;