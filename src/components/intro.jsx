import React from 'react'

const Intro = () => {
  return (
    <div className='md:min-h-screen flex justify-between p-5 xl:px-48 lg:px-24'>
      <div className='md:flex flex-col justify-start sm:justify-center lg:justify-between'>
        <div></div>
        <div>
          <p className='md:text-6xl font-bold text-3xl'>Hello 👋</p>
          <p className='md:text-4xl text-2xl'>I am <span className='font-bold'>Vel</span>,</p>
        </div>
        <div className='h-5'></div>
        <div className='md:text-lg'>
          <p>Indie-Game developer,</p> 
          <p>@Nothing Box Games 🔲.</p>
          <p>Published <span className='font-bold'>apps</span> and <span className='font-bold'>games</span> at <span className='animate-pulse'>playstore</span> 🎮.</p>
          <p>Hands on experience in <span className='font-bold'>Flutter</span> and <span className='font-bold'>Godot</span>.</p>
          <p>Simple & Minimalist.</p>
        </div>
        <div></div>
      </div>
      <div className=' text-5xl md:text-9xl font-bold w-1/2 self-center text-center  sm:block hidden'>Hi</div>
    </div>
  )
}

export default Intro