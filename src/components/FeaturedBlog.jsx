import React from 'react'

function FeaturedBlog(props) {
  return (
        <div className='flex'>
            <img src={props.image}/>
            <div className='flex flex-col gap-y-5  ml-8'>
                  <h1 className='w-[300px] font-bold text-xl'>You can move the text by dragging and dropping the text</h1>
                  <p className='w-[350px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque eveniet sunt in necessitatibus quos non?</p>
            </div>
        </div>
  )
}

export default FeaturedBlog