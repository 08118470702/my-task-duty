import React from "react";
import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("E dn happen!");
    console.log(email);
    console.log(password);
    console.log(fullName);
  }

  function handleHide() {
    !reveal ? setReveal(true) : setReveal(false);
  }
  return (
    <>
      <main className="container text-center">
        <hr />
        <h2 className="text-danger">Controlled input</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type={reveal ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Fullname:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-success btn-lg">submit form</button>
        </form>
        <button onClick={handleHide}> {reveal ? "hide" : "show"} </button>
      </main>
    </>
  );
};

export default Form;