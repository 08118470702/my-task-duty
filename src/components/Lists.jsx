import React, {useState} from 'react';
import { data,professionals } from '../db';



const List = () => {
    const [jobbers,setJobbers]=useState(professionals);
    console.log(jobbers)
  return (
   <>
   <main className='container'>
    <h2> List Component</h2>
    <hr />
    <h2> Choose Package</h2>
    <section>
        {/* mapping */}
        <section className='shadow-lg d-flex flex-wrap justify-content-center gap-1'>
        {data.map ((datum) =>{
            const {id, title, referal, priceInNaira, daily, monthly} = datum
return (
    <div key = {id} className='border w-25'>
        <h2> {title} </h2>
        <p> # {priceInNaira} </p>
        <p> {daily}</p>
        <p> $ {monthly}</p>
        <p> {referal} </p>
        <img src={datum.img} alt="" />
        <button className='btn btn-primary btn-lg'> Choose a Plan</button>
    </div>
)
        })}
        
        </section>
    </section>
   </main>
   </>
  )
}

export default List