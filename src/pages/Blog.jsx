import React from 'react'
import BlogCard from '../components/BlogCard'
import FeaturedBlog from '../components/FeaturedBlog'

function Blog() {
  return (
    <>
    <h1 className='text-5xl text-center mt-24 mb-24'>Featured Blogs</h1>
      <div className='flex gap-x-12 mx-36'>
          <div>
            <img src='b.png' className='h-[541px]' />
          </div>
          <div className='flex flex-col gap-y-12'>
             <FeaturedBlog
             image={'b1.png'}
             />
             <FeaturedBlog
             image={'b2.png'}
             />
             <FeaturedBlog
             image={'b3.png'}
             /> 
          </div>
      </div>

      <h1 className='text-5xl text-center mt-24 mb-24'>All Articles</h1>
      <div className='grid grid-cols-2 mx-36 gap-x-4 gap-y-12'>

        <BlogCard
        id={1}
        title={"A guide to Thai Curry"}
        image={'/ba1.png'}
        />
        <BlogCard
        id={2}
        title={"The best guacamole recipe with only 4 ingredients"}
        image={'/ba2.png'}
        />
        <BlogCard
        id={3}
        title={"How to store Tomatoes (and Whether to Refrigerate Them)"}
        image={'/ba3.png'}
        />
        <BlogCard
        id={4}
        title={"The Absolute Best Way to Cook French Fries"}
        image={'/ba4.png'}
        />
      </div>
    </>
  )
}

export default Blog