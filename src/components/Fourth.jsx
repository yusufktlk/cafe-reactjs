import React from 'react'
import { useNavigate } from 'react-router-dom'

function Fourth() {
    const navigate = useNavigate()
    const menu_prev = [
        {
            id:1,
            image:"/drp.png",
            title:"Drip Cofee",
            price:"$8.85"
        },
        {
            id:2,
            image:"/choco.png",
            title:"Choco Cup Cake",
            price:"$4.85"
        },
        {
            id:3,
            image:"/cburger.png",
            title:"Chicken Burger",
            price:"$8.85"
        },
        {
            id:4,
            image:"/fries.png",
            title:"French Fries",
            price:"$7.85"
        },
        {
            id:5,
            image:"/sandwich.png",
            title:"Sandwich",
            price:"$3.95"
        },
        {
            id:6,
            image:"/chinese.png",
            title:"Chinese Soup",
            price:"$8.85"
        },
    ]

    const lastest_blog = [
        {
            id:1,
            date:"21 Jun 2021",
            title:" Extra Thick Homemad Pizza Sauce",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            image:"/blog1.png"
        },
        {
            id:2,
            date:"21 Jun 2021",
            title:"The Best Way to Store Fresh Herbs",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            image:"/blog2.png"
        },
        {
            id:3,
            date:"21 Jun 2021",
            title:"5 Ways to Prepare Porridge",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            image:"/blog3.png"
        },
    ]

  return (
    <div>
        <h1 className='flex ml-4 md:ml-36 mt-24 md:mt-36 text-[#FFB577] '>OUR MENU<hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
        <div className='flex flex-col px-4 md:px-36'>
            <div className='flex flex-col md:flex-row mt-6'>
            <h1 className='font-bold md:text-5xl md:w-[750px]'>We all have to eat, so why not do it beautifully?</h1>
            <p className='w-[500px] font-thin tracking-widest'>Through True Rich Attended does no end it his mother since favoruable real had half every him cause in packages enquire we up ecstatic. Through True Rick Attended does no end it his mother.</p>
            </div>
            <h1 className='text-lg mt-8'>Most Popular Picks</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-10 gap-y-10 mt-20 ml-14 md:ml-0 w-[450px] md:w-full '>
                {
                    menu_prev.map((food,key) => (
                        <div key={key} className='hover:scale-90 duration-500 '>
                            <img className='md:w-[400px] w-[200px]' src={food.image} />
                            <div className='flex justify-between h-[50px] items-center  md:py-5 md:px-5  bg-[#1E1C21]'>
                                <h1 className='md:text-2xl'>{food.title}</h1>
                                <h3 className='md:text-2xl'>{food.price}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => navigate('/menu') & window.scroll(0,0)} className='bg-[#FFB577] text-black font-bold w-40 p-3 mb-3 mt-12 m-auto hover:scale-110 duration-500 ml-48 md:ml-0'>View Menu</button>
        </div>

        {/*  */}

        <div className='flex flex-row md:flex-row mt-24'>
            <div className='bg-[#1E1C21] w-[575px]  md:w-[700px] '>
                <img src='/qq.png' className='mt-12 mx-10 pt-10 md:pt-0 ' />
                <p className='font-bold md:text-2xl mt-8 mx-10 md:mx-20 tracking-widest w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit doloremque dolor cumque, omnis fugit enim assumenda earum quia, dolores praesentium aut consequatur nisi quisquam perspiciatis deserunt ex voluptate asperiores! Lorem ipsum dolor sit amet..</p>
                <div className='flex justify-between mx-20 mt-10 mb-10 md:mb-0 md:mt-20'>
                    <div>
                        <h1>Jogeny Andro <br /> 
                        <span className='font-thin'>Bhubaneswar,Odisha</span></h1>
                    </div>
                    <img src='/man.png'/>
                </div>
                <div className='flex justify-center mt-2'><hr className=' md:w-[500px] mt-[1px] ' /> <hr className='md:absolute md:left-[500px] md:w-[100px] md:border-b-2 ' /></div>
            </div>

            <div>
                <img src='/cup2.png' className='bg-cover' />
            </div>
        </div>

        {/* Lastest Blog */}

        <div>
            <h1 className='text-5xl font-bold ml-4  md:ml-36 mt-32 mb-20 text-center md:text-left w-[500px]'>Read Our Lastest Blog</h1>
            <div className='flex flex-col md:flex-row md:gap-x-24 gap-y-12 md:gap-y-0 md:mx-36 mt-12     '>
                {
                    lastest_blog.map((blog,key) => (
                        <div key={key} className='hover:scale-95 duration-500 ml-20 md:ml-0 w-[415px] '>
                            <div className='bg-[#1E1C21] px-8 py-5'>
                                <h1 className='font-thin text-sm mb-5'>{blog.date}</h1>
                                <h1 className='font-bold text-3xl mb-5 w-[220px]'>{blog.title}</h1>
                                <h1 className='font-thin mb-4 '>{blog.text}</h1>
                            </div>
                            <img className='h-[250px] md:h-[200px] ' src={blog.image} />
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Fourth