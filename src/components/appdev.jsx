import React from 'react'
import flutterlogo from '../assets/flutter.svg';
import playlogo from '../assets/google-play.png';
import githublogo from '../assets/github.png';

const AppDev = () => {
  
  const PlayLink = ({link})=>{
    return (
    <a href={link} className='inline-flex'>
      <img src={playlogo} alt="playlogo" width={15} />
    </a>);
  };
  const GitLink = ({link})=>{
    return (
    <a href={link} className='inline-flex'>
      <img src={githublogo} alt="playlogo" width={15} />
    </a>);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between p-5 xl:px-48 lg:px-24'>
      <div className=' self-center w-full'>
        <img src={flutterlogo} alt="F" className=' w-48 hidden md:block lg:w-40'/>
        </div>
      <div className='w-full'>
        <p className=' text-2xl font-bold'>Flutter & Dart</p>
        <p className=' text-lg'>Learning and developing apps using flutter.</p>
        <br />
        <div className='md:text-lg'>
            <p>{'- Bahrain Bus'} <PlayLink link='#'/></p>
            <p>{'- Mini Todo'} <PlayLink link='#'/>,<GitLink link='#'/> </p>
            <p>{'- Hastagram'} <GitLink link='#'/> </p>
            <p>{'- Gulf news'} <GitLink link='#'/></p>
            <p>{'- Notes App'} <GitLink link='#'/></p>
            <p>{'- Word Rush'} <PlayLink link='#'/>,<GitLink link='#'/> </p>
            <p>{'- Bahrain Bus'} <PlayLink link='#'/>,<GitLink link='#'/></p> 
            <p>{'- Bluetooth Scale'} <GitLink link='#'/></p>
        </div>
        
      </div>
    </div>
  )
}

export default AppDev