import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <div className='mt-44 md:mt-24 md:mx-36 md:pt-36 md:my-4'> 
        <div id='upper' className='flex'>
            <div className='flex flex-col md:w-[400px] pl-1 md:pl-0 gap-y-12 pt-12  bg-[#1E1C21] '>
                <h1 className='font-bold flex-col flex ml-8  md:ml-12'>
                Working Hour
                <span className='font-thin mr-4 md:mr-0'>Sunday to Saturday <br /> 09:00 AM to 11:00 PM</span>
                </h1>
                <h1 className='font-bold flex flex-col ml-8 md:ml-12'>
                Location
                <span className='font-thin mr-4 md:mr-0'>Street-127, New York, <br /> United States <br /> 546544</span>
                </h1>
                <h1 className='font-bold flex flex-col ml-8 md:ml-12'>
                Contact us
                <span className='font-thin mr-4 md:mr-0'>+123456789 <br /> hey@yourdomain.com</span>
                </h1>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.062246498!2d-74.30932615182786!3d40.6970192907644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1691516416007!5m2!1str!2str"  
                className='w-[357px] md:w-[850px] h-[440px] ]'
                ></iframe>
            </div>
        </div>

        {/* bottom */}
        <div>
            <h1 className='text-[#FFB577] text-2xl mt-24 text-center ml-40 md:ml-0'><span className='font-bold'>{`{`}</span>Finsweet</h1>
            <div className='flex justify-center gap-x-10 ml-44 md:ml-0  md:gap-x-12 mt-10'>
                <a onClick={() => navigate('/')& window.scroll(0,0)} className='cursor-pointer'>Home</a>
                <a onClick={() => navigate('/menu')& window.scroll(0,0)} className='cursor-pointer'>Menu</a>
                <a onClick={() => navigate('/about')& window.scroll(0,0)} className='cursor-pointer'>About Us</a>
                <a onClick={() => navigate('/story')& window.scroll(0,0)} className='cursor-pointer'>Our Story</a>
                <a onClick={() => navigate('/blog')& window.scroll(0,0)} className='cursor-pointer'>Blog</a>
                <a onClick={() => navigate('/contact')& window.scroll(0,0)} className='cursor-pointer'>Contact</a>
            </div>
            <hr className='opacity-20 mt-5' />

            <div className='md:flex md:justify-between font-thin mt-8 md:mt-12 mx-2 md:mx-0  ' >
                <h1 className='ml-36 md:ml-0 w-[400px] md:w-full'>2021 Finsweet | All Rights Reserved. </h1>
                <div id='icons' className='flex ml-44 md:ml-0 mt-2 md:mt-0 mb-2 md:mb-0  gap-x-10 md:gap-x-5 md:mr-64 '>
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                    <BsLinkedin />
                </div>
                <a className='ml-[230px] md:ml-52 w-[200px] pb-6 md:pb-0'>Contact Us</a>
            </div>
        </div>
        
    </div>
    
  )
}

export default Footer