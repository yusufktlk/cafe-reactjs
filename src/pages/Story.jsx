import React from 'react'

function Story() {
  return (
    <div className='flex flex-col md:flex-row mx-2 md:mx-36 mt-24'>
      <div className='flex flex-col'>
          <h1 className='font-bold text-5xl '>Our Story</h1>
          <p className='w-[500px] md:w-[550px]  tracking-widest mt-6 ml-2 md:ml-0'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up estatic.</p>
          <div className='flex mt-6 gap-x-12  mx-2 md:mx-0'>
            <img className='mt-20' src='/story1.png' />
            <img className='mb-20' src='/story2.png' />
          </div>
      </div>
      <div className='ml-6 md:ml-24'>
        <h1 className='font-bold text-3xl w-[500px] mt-12 md:mt-0'>One of the best cafes in <span className='text-[#FFB577]'>New York.</span></h1>
        <p className='mt-7 tracking-widest text-[#B8B8B8] w-[500px] md:w-[550px]'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
        <p className='mt-4 tracking-widest text-[#B8B8B8] w-[500px] md:w-[550px]'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
      </div>
    </div>
  )
}

export default Story