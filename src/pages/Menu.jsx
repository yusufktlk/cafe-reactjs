import React from 'react'

function Menu() {
  const menu = [
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
    {
        id:7,
        image:"/quafe.png",
        title:"Quafe Brade",
        price:"$7.85"
    },
    {
      id:8,
      image:"/dalgona.png",
      title:"Dalgona Cofee",
      price:"$3.95"
    },
    {
      id:9,
      image:"/chowmin.png",
      title:"Chowmin Noodle",
      price:"$8.85"
    },
    {
      id:10,
      image:"/cola.png",
      title:"Coka Cola",
      price:"$4.85"
    },
    {
      id:11,
      image:"/salad.png",
      title:"Fruit Salad",
      price:"$6.85"
    },
    {
      id:12,
      image:"/cocktail.png",
      title:"Cocktail",
      price:"$5.85"
    },

]
  return (
    <>
    <h1 className='flex ml-36 mt-24 text-[#FFB577] '>OUR MENU<hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
    <div className='flex mt-6 mx-36'>
    <h1 className='font-bold text-5xl w-[750px]'>Discover <br/> Our menu Chart</h1>
    <p className='w-[500px] font-thin tracking-widest'>Through True Rich Attended does no end it his mother since favoruable real had half every him cause in packages enquire we up ecstatic. Through True Rick Attended does no end it his mother.</p>
    </div>
    <div className='flex ml-36 mt-12 gap-x-12'>
      <a className='font-bold'>All</a>
      <a className='opacity-70'>Fast Food</a>
      <a className='opacity-70'>Cofee</a>
      <a className='opacity-70'>Cocktails</a>
      <a className='opacity-70'>Quafe Cake</a>
      <a className='opacity-70'>Snack</a>
    </div>
    <div  className='grid grid-cols-3 gap-x-10 gap-y-10 mt-20 mx-36'>
      {
        menu.map((m,key) => (
          <div key={key} className='hover:scale-90 duration-500'>
                            <img className='w-[400px]' src={m.image} />
                            <div className='flex justify-between py-5 px-5  bg-[#1E1C21]'>
                                <h1 className='text-2xl'>{m.title}</h1>
                                <h3 className='text-2xl'>{m.price}</h3>
                            </div>
                        </div>
        ))
      }
    </div>
    </>
  )
}

export default Menu