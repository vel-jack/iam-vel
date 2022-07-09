import React from 'react'
import playlogo from '../assets/google-play.png';
import githublogo from '../assets/github.png';

const IconLink = ({link,isStore}) => {
  return (
    <a href={link} className='inline-flex' target={'_blank'} >
      <img src={isStore? playlogo:githublogo} alt="icon" className=' w-4 md:w-5' />
    </a>
  );
}

export default IconLink