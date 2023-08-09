import React from 'react'
import { useNavigate } from 'react-router-dom'

function Second() {
  const navigate = useNavigate()
  return (
    <div>
        <h1 className='flex ml-36 mt-36 text-[#FFB577]'>KNOW MORE ABOUT US <hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
      <div className='flex mt-6 px-36 gap-x-16'>
        <div>
            <h1 className='text-5xl font-bold w-[500px]'>We source sustainable & line caught Foods</h1>
            <p  className='w-[650px] mt-6 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae neque laborum tenetur error tempora labore commodi eos, sit aperiam mollitia perferendis quo dolorem animi recusandae quod ducimus iusto porro voluptatem quasi!</p>
            <div className='flex gap-x-12 font-thin'>
                <div className='flex flex-col w-[200px]'>
                  <div className='flex mt-10'>
                    <img src='/icon.png' />
                    <h1 className='text-3xl font-bold'>10+ People</h1>
                  </div>
                  <h1 className='mt-2'>We are Small Team</h1>
                  <p className='w-[170px] mt-5'>Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
                <div className='flex flex-col w-[200px]'>
                  <div className='flex mt-10'>
                    <img src='/icon.png' />
                    <h1 className='text-3xl font-bold'>2014</h1>
                  </div>
                  <h1 className='mt-2'>We are From</h1>
                  <p className='mt-5'>Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
                <div className='flex flex-col w-[200px]'>
                  <div className='flex mt-10'>
                    <img src='/icon.png' />
                    <h1 className='text-3xl font-bold'>200k</h1>
                  </div>
                  <h1 className='mt-2'>We Served</h1>
                  <p className='mt-5'>Through True Rich Attended does no end it his mother since favourable.</p>
                </div>
            </div>
            <button onClick={() => navigate('/menu') & window.scroll(0,0)} className='bg-[#FFB577] text-black font-bold w-40 p-3 mb-3 mt-12 hover:scale-110 duration-500'>View Menu</button>
        </div>
        <div className='flex gap-x-20'>
          <img src='/know1.png' className='w-[240px] h-[500px] mt-20' />
          <img src='/know2.png' className='w-[240px] h-[500px]' />
        </div>
      </div>
    </div>
  )
}

export default Second