import React from 'react';
import Myimg from '../assets/me.jpg';


function Home() {
  return (
    
      <div>
    <div className="flex items-center justify-center h-400px md:h-600px bg-black text-white">
      <div className="text-center px-4 ">
        <div className=" flex-wrap justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <div className='flex-row'>
          <span>Hello,</span>
          <span> I'm</span></div>
          <span className="text-yellow-400 ml-2">EESARA ...</span>
        </div>
      </div>
    </div>
    

    <div className='font-poppins bg-black text-white font-bold text-center text-3xl pb-10 sm:text-4xl'>Connect With Me</div>
      <div className='flex justify-center gap-8 sm:gap-10 pb-24 bg-black text-white'>
        <a href='https://www.linkedin.com/in/eesara-megasooriya/' target='_blank' rel='noreferrer'>
          <i className='text-w bx bxl-linkedin text-4xl sm:text-6xl hover:text-blue-400'></i>
        </a>
        <a href='https://github.com/EesaraMegasooriya' target='_blank' rel='noreferrer'>
          <i className='bx bxl-github text-4xl sm:text-6xl hover:text-blue-400'></i>
        </a>
        <a href='https://www.facebook.com/eesaramegasooriya/' target='_blank' rel='noreferrer'>
          <i className='bx bxl-facebook text-4xl sm:text-6xl hover:text-blue-400'></i>
        </a>
        <a href='https://www.instagram.com/_eesara_/' target='_blank' rel='noreferrer'>
          <i className='bx bxl-instagram text-4xl sm:text-6xl hover:text-blue-400'></i>
        </a>
      </div>
    {/* <div className='text-center sm:text-5xl text-3xl font-bold pb-9 sm:pb-20 bg-black text-white'>Who am I ??</div> */}

    <div className='flex flex-col bg-black text-white xl:flex-row justify-center items-center xl:px-36 gap-10 sm:gap-x-5'>
        <img src={Myimg} alt="Profile" className='w-40 sm:w-48 xl:w-80 rounded-full border-4' />
        <div className='px-4 sm:px-6 text-center sm:text-left text-lg sm:text-2xl'>
          I'm Eesara Megasooriya, a dedicated <b>full stack developer (MERN Stack)</b> from Sri Lanka and an undergraduate at SLIIT, specializing in Web Development with a focus on React JS. Alongside coding, I have experience in video editing and have completed various projects in this field. Feel free to reach out for class videos, YouTube content, or any other video editing needs!
          
        </div>
      </div>
      <div className='pt-9 text-center bg-black'>
            <a href='https://drive.google.com/file/d/1cI8xRU2BDMopjho3135Vy02rdS1DkM-e'>
              <button className="group inline-flex items-center justify-center px-6 py-2 rounded-md bg-gray-800/30 backdrop-blur-lg text-white text-base font-semibold hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out border border-white/20">
                <span className="text-lg">Download CV</span>
              </button>
            </a>
          </div>


          <div className='text-white pt-20 bg-black text-3xl md:text-5xl font-bold text-center '>Services</div>
          <div className='bg-black'>

            
           </div>



    </div>
    
  );
}

export default Home;
