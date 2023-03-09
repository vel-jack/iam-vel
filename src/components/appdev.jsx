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
            <p>{'- Flutter Developer Intern at'} <a href='https://www.gogullak.com' target={'_blank'} className="font-bold">GoGullak</a> <IconLink link={'https://play.google.com/store/apps/details?id=com.gogullak.gullak'} isStore={true}/></p>
            <p>{'- Word Rush'} <IconLink link={'https://play.google.com/store/apps/details?id=com.emptybox.wordrush'} isStore={true}/> <IconLink link={'https://github.com/vel-jack/wordrush'}/></p>
            <p>{'- Mini Todo'} <IconLink link={'https://play.google.com/store/apps/details?id=com.emptybox.minitodo'} isStore={true}/> <IconLink link={'https://github.com/vel-jack/minitodo'}/></p>
            <p>{'- Bahrain Bus'} <IconLink link={'https://play.google.com/store/apps/details?id=com.emptybox.bhbus'} isStore={true}/></p> 
            <p>{'- Bluetooth Scale'} <IconLink link={'https://github.com/vel-jack/bluetooth_scale'}/></p>
        </div>
      </div>
    </div>
  )
}

export default AppDev