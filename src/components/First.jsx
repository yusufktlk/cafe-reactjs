import React from 'react'
import { useNavigate } from 'react-router-dom'

function First() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around pt-4 px-24'>
          <div id='left' className='flex flex-col mt-28 gap-y-4'>
              <h1 className='text-5xl w-[500px] font-bold'>We serve high quality foods of all kinds.</h1>
              <p className='w-[650px] mt-4 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae ipsa nisi repellendus, ducimus ad mollitia, aut quibusdam tenetur iure dolores possimus deserunt.</p>
              <button onClick={() => navigate('/menu') & window.scroll(0,0)}className='bg-[#FFB577] text-black font-bold w-40 p-3 mb-3 mt-3 hover:scale-110 duration-500'>View Menu</button>
              <div className='flex flex-col'>
                <h1 className='font-bold text-lg'>Opening Times</h1>
                <p className='font-thin'>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-bold text-lg'>Location</h1>
                <p className='font-thin'>Master canteen, BBSR, Odisha 752054</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-bold text-lg'>Call Us</h1>
                <p className='font-thin'>+9776462441</p>
              </div>
          </div>
          <div id='right' className='mt-12'>
              <img src='/cup.png' className='w-[500px]' />
          </div>
      </div>
  )
}

export default First