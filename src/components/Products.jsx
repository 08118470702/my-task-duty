import React from 'react';
import reactLogo from '../assets/react.svg'

const Product = ({cartItem}) => {
  console.log(cartItem);
  return (
    <>
    {/* {cartItem.map()} */}
    <main className='container text-center'>
        <h2>My products</h2>
        <img src={reactLogo} alt="react-logo"  />
        <div> {cartItem.map((item,itx)=>{
          return(
            <div key = {itx}>
              <h2>{item}</h2> 
           </div>
              
          )
          
        })}
        </div>
    </main>
    </>
  );
};

export default Product;