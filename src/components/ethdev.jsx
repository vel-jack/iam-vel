import React from 'react'
import solidityLogo from '../assets/solidity.jpg';
import IconLink from './iconlink';


const EthDev = () => {  
  const Demo =({link})=>{
    return (<a href={link} target={'_blank'} className=' animate-pulse'>(Demo)</a>);
  }  
  return (
    <div className='flex flex-col md:flex-row justify-between px-5 xl:px-48 lg:px-24 md:py-20'>
      <div className='flex justify-center w-full'>
        
        <img src={solidityLogo} alt="F" className=' w-40 hidden md:block '/>
        
      </div>
      <div className='w-full'>
        <p className=' text-2xl font-bold'>Web3 with solidity</p>
        <p className=' text-lg'>Having knowledge of writing and deploying ethereum smart contracts using solidity. Deployed DAPPs on rinkeby test network.</p>
        <br />
        <div className='md:text-lg'>
            <p>{'- Crypto T-Shirts'} <Demo link={'https://crypto-tee.vercel.app/'}/> <IconLink link={'https://github.com/vel-jack/crypto-tee'}/></p>
            <p>{'- Bank contract'} <Demo link={'http://simple-bank-contract.vercel.app/'}/> <IconLink link={'https://github.com/vel-jack/Simple-Bank-Contract'}/></p>
            <p>{'- Bone coin (ERC20)'} <Demo link={'http://bone-coin.vercel.app/'}/> <IconLink link={'https://github.com/vel-jack/bone-coin'}/></p>
            
        </div>
        
      </div>
    </div>
  )
}

export default EthDev