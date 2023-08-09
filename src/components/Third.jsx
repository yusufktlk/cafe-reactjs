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
        <h1 className='flex ml-36 mt-36 text-[#FFB577] '>WHAT WE ARE SERVING <hr className='w-12 mt-3 ml-3 border-t-2  ' /></h1>
      <div className='flex flex-col px-36'>
        <div className='flex mt-6'>
          <h1 className='font-bold text-5xl w-[750px]'>We all have to eat, so why not do it beautifully?</h1>
          <p className='w-[500px] font-thin tracking-widest'>Through True Rich Attended does no end it his mother since favoruable real had half every him cause in packages enquire we up ecstatic. Through True Rick Attended does no end it his mother.</p>
        </div>

        <div className='grid grid-cols-3 mt-8'>
            {
                menu_variety.map((vari, key) => (
                    <div key={key} className='p-12 mt-4'>
                        <img src={vari.image} />
                        <h1 className='text-3xl font-bold mt-6'>{vari.title}</h1>
                        <p className='font-thin mt-4 w-[260px]'>{vari.text}</p>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  )
}

export default Third