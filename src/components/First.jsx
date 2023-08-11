import React from 'react'
import { useNavigate } from 'react-router-dom'

function First() {
  const navigate = useNavigate()
  return (
    <div className='md:flex md:justify-around md:mx-0  md:text-left pt-12 md:pt-4 md:px-24'>
          <div id='left' className='flex flex-col mt-12 md:mt-12 gap-y-2 md:gap-y-5'>
              <h1 className='text-5xl ml-6 md:ml-0 w-[550px] md:w-[500px] font-bold'>We serve high quality foods of all kinds.</h1>
              <p className='md:w-[650px] w-[500px] ml-6 md:ml-0 mt-4 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae ipsa nisi repellendus, ducimus ad mollitia, aut quibusdam tenetur iure dolores possimus deserunt.</p>
              <button onClick={() => navigate('/menu') & window.scroll(0,0)}className='bg-[#FFB577] text-black font-bold w-40 p-3 mb-4 md:mb-4 mt-4 md:mt-4 hover:scale-110 duration-500 ml-[185px] md:ml-0'>View Menu</button>
              <div className='flex flex-col text-center md:text-left ml-4 md:ml-0'>
                <h1 className='font-bold text-lg ml-32 md:ml-0 '>Opening Times</h1>
                <p className='font-thin ml-32 md:ml-0 w-[250px]'>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
              </div>
              <div className='flex flex-col text-center md:text-left ml-24 md:ml-0'>
                <h1 className='font-bold text-lg ml-10 md:ml-0'>Location</h1>
                <p className='font-thin ml-12 md:ml-0 w-[230px] '>Master canteen, BBSR, Odisha 752054</p>
              </div>
              <div className='flex flex-col text-center md:text-left ml-24 md:ml-0'>
                <h1 className='font-bold text-lg ml-8 md:ml-0'>Call Us</h1>
                <p className='font-thin ml-6 md:ml-0'>+9776462441</p>
              </div>
          </div>
          <div id='right' className='mt-12'>
              <img src='/cup.png' className='mx-20 md:mx-0 rounded-3xl md:rounded-none m-auto md:w-[500px] md:h-[550px]' />
          </div>
      </div>
  )
}

export default First