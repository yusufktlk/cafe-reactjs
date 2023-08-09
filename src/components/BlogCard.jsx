import React from 'react'
import Blog from '../pages/Blog'
import { Link } from 'react-router-dom'

function BlogCard(props) {
  return (
    <div className='flex'>
            <img src={props.image} />
            <div className='flex flex-col mt-12 ml-12'>
              <div className='flex'>
                  <img src='andrew.png' className='w-12 h-12 mr-4' />
                <div>
                  <h1>Andrew Jonson</h1>
                  <p className='font-thin'>27th January 2021</p>
                </div>
              </div>
              <h1 className='mt-4 font-bold'>{props.title}</h1>
              <Link to={`/blog/${props.id}}`} onClick={() => window.scroll(0,0)}  className='mt-4 mr-24 bg-gray-800 p-2 rounded-lg w-[100px] text-center hover:scale-110 duration-500'>Read More</Link>
            </div>
        </div>
  )
}

export default BlogCard