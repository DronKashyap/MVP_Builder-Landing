import React from 'react'
import Bookcallbtn from './UI/Bookcallbtn'


function Navbar() {
  return (
    <div className='flex justify-around py-6 items-center'>
      <div className='flex items-center'> 
       <img className="h-[46px] w-[42px]"  src="./Logo.png" alt="Logo" /> 
      <span className="bg-gradient-to-r from-[#003BB9] to-[#0F93FF] bg-clip-text text-transparent font-bold">
        Launchpad
      </span>
        <span className='font-bold ml-1'>Labs</span>
      </div>
      <div className='flex space-x-9 items-center'> 
        <h1> How it works</h1>
        <h1>  Our Work </h1>
        <h1>Our Process</h1>
        <h1> Founder</h1>
        <h1> Pricing</h1>
       <Bookcallbtn text="Book A Call" />
      </div>
    </div>
  )
}

export default Navbar
