import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  return (
        <div>
          <h1 className='flex ml-36 mt-24 text-[#FFB577]'>KNOW MORE ABOUT US <hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
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
            <img src='/a1.png' className='w-[240px] h-[500px] mt-20' />
            <img src='/a2.png' className='w-[240px] h-[500px]' />
          </div>
        </div>

        {/*  */}
        <div className='mx-36 mt-44 bg-[#211D23] pb-20'>
            <img src='abg.jpg'  className='opacity-80'/>
            <h1 className='text-3xl mt-20 ml-12'>Our History</h1>
            <div className='m-12'>
              <div className='flex justify-between gap-x-36 mt-16  '>
                  <div className='border-t-4 border-b-4 w-[200px] border-[#FFB577]'>
                    <h1 className='text-4xl mt-2 '>1998</h1>
                    <h2 className='text-xl mt-4'>Milestone One</h2>
                    <p className='w-[150px] mt-4 mb-4'>Through True Rich Attended does no end it his mother since favourable.</p>
                  </div>
                  <div className='border-t-4 border-b-4 w-[200px] border-[#FFB577]'>
                    <h1 className=' text-4xl mt-2'>2005</h1>
                    <h2 className='text-xl mt-4'>Milestone One</h2>
                    <p  className='w-[150px] mt-4 mb-4'>Through True Rich Attended does no end it his mother since favourable.</p>
                  </div>
                  <div className='border-t-4 border-b-4 w-[200px] border-[#FFB577]'>
                    <h1 className='text-4xl mt-2'>2012</h1>
                    <h2 className='text-xl mt-4'>Milestone One</h2>
                    <p  className='w-[150px] mt-4 mb-4'>Through True Rich Attended does no end it his mother since favourable.</p>
                  </div>
                  <div className='border-t-4 border-b-4 w-[200px] border-[#FFB577]'>
                    <h1 className='text-4xl mt-2'>2021</h1>
                    <h2 className='text-xl mt-4'>Milestone One</h2>
                    <p  className='w-[150px] mt-4 mb-4'>Through True Rich Attended does no end it his mother since favourable.</p>
                  </div>
              </div>

            </div>
        </div>

        {/*  */}
        <div className='flex mx-36 justify-between mt-24 '>
          <h1 className='text-5xl'>Things our company stands for</h1>
          <div className='w-[800px] mt-2'>
            <h1 className='font-bold text-3xl'>Edit this text to make it your own. To edit, simply click directly</h1>
            <p className='mt-6 font-thin w-[550px] tracking-widest'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
          </div>
        </div>
    </div>
  )
}

export default About