import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
      {/* <h1>Hero component</h1>
      <div className='container shadow-lg d-md-flex justify-content-between'>
        <h2 className='text-danger border border-danger'>my work</h2>
        <h2 className='text-success border border-success'>our work</h2>
      </div> */}


      {/* Using Bootstrap Grids */}

      <h1>Hero component</h1>
      <div className='container shadow-lg p-5'>
        <div className='row justify-content-between '>
        <h2 className='text-danger border border-danger col-md-6'>my work</h2>
        <h2 className='text-success border border-success col-md-4 '>our work</h2>
        </div>
      </div>
    </>
  )
}

export default Hero