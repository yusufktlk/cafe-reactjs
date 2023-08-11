import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
  return (
    <div className='flex mx-12 md:mx-36 mt-24'>
      <div>
        <h1 className='text-5xl font-semibold'>Have Question? <br /> Get in Touch with us 👋</h1>
        <p className='text-[#B8B8B8] mt-6'>Fill up the Form and our team will get back to within 24hrs</p>
        <form className='mt-10' onSubmit={() => alert("Thanks for your message!")}>
          <div>
            <input placeholder='Name' required  className='bg-[#18161A] w-[200px] font-bold border-2 p-2' />
            <input placeholder='Email' required className='bg-[#18161A] w-[200px] ml-12 font-bold border-2 p-2' />
          </div>
          <input placeholder='Message' required className='bg-[#18161A] w-[450px] pb-[150px] mt-12 font-bold border-2 p-2 rounded-lg'  />
          <br />
          <button type='submit' className='mt-12 font-bold bg-[#232128] p-4 '>Send Message</button>
        </form>
       
      </div>
      
      <div className='hidden md:flex gap-x-12 ml-32 '> 
        <img src='/about1.png' className='mt-24' />
        <img src='/about2.png' className='mb-24' />
      </div>
    </div>
  )
}

export default Contact