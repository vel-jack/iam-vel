import React from 'react'
import flutterlogo from '../assets/flutter.svg';
import IconLink from './iconlink';

const AppDev = () => {  
  return (
    <div className='flex flex-col md:flex-row justify-between px-5 xl:px-48 lg:px-24 md:py-20'>
      <div className='flex justify-center w-full'>
        
        <img src={flutterlogo} alt="F" className=' w-40 hidden md:block '/>
        
      </div>
      <div className='w-full'>
        <p className=' text-2xl font-bold'>Flutter & Dart</p>
        <p className=' text-lg'>Learning and developing apps using flutter.</p>
        <br />
        <div className='md:text-lg'>
            <p>{'- Mini Todo'} <IconLink link={'#'} isStore={true}/> <IconLink link={'#'}/></p>
            <p>{'- Word Rush'} <IconLink link={'#'} isStore={true}/> <IconLink link={'#'}/></p>
            <p>{'- Bahrain Bus'} <IconLink link={'#'} isStore={true}/> <IconLink link={'#'}/></p> 
            <p>{'- Bluetooth Scale'} <IconLink link={'#'}/></p>
            <p>{'- Notes App'} <IconLink link={'#'}/></p>
            <p>{'- Hastagram'} <IconLink link={'#'}/></p>
            <p>{'- Gulf news'} <IconLink link={'#'}/></p>
        </div>
        
      </div>
    </div>
  )
}

export default AppDev