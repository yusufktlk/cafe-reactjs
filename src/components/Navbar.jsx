import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between ml-4 md:ml-28 md:px-36 mt-3 md:mt-6 items-center'>
        <div className='flex md:flex-row gap-x-6  md:gap-x-10 md:text-lg items-center'>
            <a className='text-[#FFB577] text-md md:text-2xl md:mr-4 mb-2 md:mb-0'><span className='font-bold'>{`{`}</span>Finsweet</a>
            <a onClick={() => navigate('/')} className='cursor-pointer'>Home</a>
            <a onClick={() => navigate('/menu')} className='cursor-pointer'>Menu</a>
            <a onClick={() => navigate('/about')} className='cursor-pointer'>About Us</a>
            <a onClick={() => navigate('/story')} className='cursor-pointer'>Our Story</a>
            <a onClick={() => navigate('/blog')} className='cursor-pointer'>Blog</a>
            <a onClick={() => navigate('/contact')} className='cursor-pointer'>Contact</a>
        </div>
        <div className='text-sm md:text-md text-center md:text-right ml-6 md:ml-0 mt-2 md:mt-0 text-[#FFB577] '>
            <h1>Clone Project</h1>
        </div>
    </div>
  )
}

export default Navbar