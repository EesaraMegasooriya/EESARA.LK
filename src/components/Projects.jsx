import React from 'react'

function Projects() {
  return (
    <div>
        <div className='text-white pt-20 bg-black text-3xl md:text-5xl font-bold text-center '>Projects</div>
        <div className='text-white bg-black px-6 font-poppins md:pt-20 pt-10 text-center md:text-xl'>I have worked on a variety of projects using different languages & technologies, including:</div>
        <ul className='text-white bg-black grid grid-cols-2 ms:px-72 lg:px-60 xl:px-72 font-poppins pt-10 gap-x-1 gap-y-1 text-center md:text-xl'>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-html5 text-2xl'></i>HTML</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-css3 text-2xl'></i>CSS</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-tailwind-css text-2xl'></i>Tailwind-css</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-php text-2xl'></i>PHP</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-react text-2xl'></i>React</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-mongodb text-2xl'></i>MongoDB</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-nodejs text-2xl'></i>Node.js</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-javascript text-2xl'></i>JavaScript</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-git text-2xl'></i>Git</li>
  <li className='flex justify-center gap-2 font-bold h-20'><i className='bx bxl-figma text-2xl'></i>Figma</li>
  
</ul>


         
    </div>
  )
}

export default Projects