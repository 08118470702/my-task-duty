import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Fetch = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // function for fetching
  const getData = async () => {
    try {
        setIsLoading (true)
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error.message);
    } finally {
        setIsLoading (false)
    }
  };

  function inc() {
    setCount((prev) => prev + 1);
    console.log(count);
  }
  useEffect(() => {
    console.log(count);
    document.title = "our app";
    getData();
  }, [count]);
  return (
    <>
      <main className="container text-center">
        <hr />
        <h2> Fetch and useEffect Basis</h2>
        <h1> {count}</h1>
        <button className="btn btn-success btn-lg" onClick={inc}>
          increase{" "}
        </button>
        <hr />
        {/* Data Fetching */}
        {isLoading && <> <Spinner animation="border" /> </>}
        <section className="container row justify-content-center align-items-center p-5 gap-2">
          {data.map((datum) => {
            return (
              <div key={datum.id} className="col-md-4">
                <h2> {datum.title.slice(0, 9)} </h2>
                <p> {datum.price} </p>
                <img src={datum.image} alt="" className="img-fluid col-4" />
                <p> {datum.rating.rate} </p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Fetch;