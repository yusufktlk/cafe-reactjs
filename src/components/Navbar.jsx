import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between px-36 mt-6 items-center'>
        <div className='flex gap-x-10 text-lg items-center'>
            <a className='text-[#FFB577] text-2xl mr-4'><span className='font-bold'>{`{`}</span>Finsweet</a>
            <a onClick={() => navigate('/')} className='cursor-pointer'>Home</a>
            <a onClick={() => navigate('/menu')} className='cursor-pointer'>Menu</a>
            <a onClick={() => navigate('/about')} className='cursor-pointer'>About Us</a>
            <a onClick={() => navigate('/story')} className='cursor-pointer'>Our Story</a>
            <a onClick={() => navigate('/blog')} className='cursor-pointer'>Blog</a>
            <a onClick={() => navigate('/contact')} className='cursor-pointer'>Contact</a>
        </div>
        <div className='text-md text-[#FFB577]'>
            <h1>Clone Project</h1>
        </div>
    </div>
  )
}

export default Navbar