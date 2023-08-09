import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <div className='mt-52 mx-36 my-4'> 
        <div id='upper' className='flex'>
            <div className='flex flex-col w-[400px] gap-y-12 pt-12 bg-[#1E1C21] '>
                <h1 className='font-bold flex-col flex ml-12'>
                Working Hour
                <span className='font-thin'>Sunday to Saturday <br /> 09:00 AM to 11:00 PM</span>
                </h1>
                <h1 className='font-bold flex flex-col ml-12'>
                Location
                <span className='font-thin'>Street-127, New York, <br /> United States <br /> 546544</span>
                </h1>
                <h1 className='font-bold flex flex-col ml-12'>
                Contact us
                <span className='font-thin'>+123456789 <br /> hey@yourdomain.com</span>
                </h1>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.062246498!2d-74.30932615182786!3d40.6970192907644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1691516416007!5m2!1str!2str"  
                className='w-[850px] h-[450px] ]'
                ></iframe>
            </div>
        </div>

        {/* bottom */}
        <div>
            <h1 className='text-[#FFB577] text-2xl mt-24 text-center'><span className='font-bold'>{`{`}</span>Finsweet</h1>
            <div className='flex justify-center gap-x-12 mt-10'>
                <a onClick={() => navigate('/')& window.scroll(0,0)} className='cursor-pointer'>Home</a>
                <a onClick={() => navigate('/menu')& window.scroll(0,0)} className='cursor-pointer'>Menu</a>
                <a onClick={() => navigate('/about')& window.scroll(0,0)} className='cursor-pointer'>About Us</a>
                <a onClick={() => navigate('/story')& window.scroll(0,0)} className='cursor-pointer'>Our Story</a>
                <a onClick={() => navigate('/blog')& window.scroll(0,0)} className='cursor-pointer'>Blog</a>
                <a onClick={() => navigate('/contact')& window.scroll(0,0)} className='cursor-pointer'>Contact</a>
            </div>
            <hr className='opacity-20 mt-5' />

            <div className='flex justify-between font-thin mt-12'>
                <h1>2021 Finsweet | All Rights Reserved. </h1>
                <div id='icons' className='flex gap-x-5 mr-32 '>
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                    <BsLinkedin />
                </div>
                <a>Contact Us</a>
            </div>
        </div>
        
    </div>
    
  )
}

export default Footer