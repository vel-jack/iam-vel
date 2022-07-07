import React from 'react'
import godotLogo from '../assets/godot.svg';
import IconLink from './iconlink';

const GameDev = () => {  
  return (
    <div className='flex flex-col md:flex-row justify-between p-5 xl:px-48 lg:px-24 md:py-20'>
      <div className='w-full'>
        <p className=' text-2xl font-bold'>Game development</p>
        <p className=' text-lg'>Making simple and minimal puzzle games with godot game engine. Published games at play store under the name of <span className='font-bold'>Nothing Box Games</span>.</p>
        <br />
        <div className='md:text-lg'>
            <p>{'- Cress'} <IconLink link={'#'} isStore={true}/></p>
            <p>{'- Cress (Demo version)'} <IconLink link={'#'} isStore={true}/></p>
            <p>{'- Add Dots'} <IconLink link={'#'} isStore={true}/> </p> 
            <p>{'- Pop the tiles'} <IconLink link={'#'} isStore={true}/></p>
            <p>{'- Perplex'} <IconLink link={'#'} isStore={true}/></p>
            <p>{'- Misma (In development)'} </p>
        </div>
      </div>
      <div className='flex justify-center w-full'>
      
        <img src={godotLogo} alt="F" className='w-48 hidden md:block '/>
      
      </div>
    </div>
  )
}

export default GameDev