import React from 'react'

function Third() {
    const menu_variety = [
        {
            id:1,
            image: "/variety1.png",
            title: "Quafe Cake",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            id:2,
            image: "/variety2.png",
            title: "Cofee",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            id:3,
            image: "/variety3.png",
            title: "Fast Food",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            id:4,
            image: "/variety4.png",
            title: "Cocktails",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            id:5,
            image: "/variety5.png",
            title: "Grill",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
            id:6,
            image: "/variety6.png",
            title: "Snacks",
            text: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        
    ]
  return (
    <div>
        <h1 className='flex md:ml-36 ml-4 mt-20 md:mt-36 text-[#FFB577] '>WHAT WE ARE SERVING <hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
      <div className='flex flex-col px-4 md:px-36'>
        <div className='flex flex-col md:flex-row mt-6'>
          <h1 className='font-bold md:text-5xl md:w-[750px]'>We all have to eat, so why not do it beautifully?</h1>
          <p className='w-[500px] mt-4 md:mt-0 font-thin tracking-widest'>Through True Rich Attended does no end it his mother since favoruable real had half every him cause in packages enquire we up ecstatic. Through True Rick Attended does no end it his mother.</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-0 md:mt-8'>
            {
                menu_variety.map((vari, key) => (
                    <div key={key} className='md:p-12 p-3 mt-4 ml-24 md:ml-0'>
                        <img src={vari.image} className='' />
                        <h1 className='md:text-3xl font-bold mt-4 md:mt-6 w-[100px] md:w-[200px]'>{vari.title}</h1>
                        <p className='font-thin mt-1 md:mt-4 w-[140px] md:w-[260px]'>{vari.text}</p>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  )
}

export default Third