import React from 'react'
import solidityLogo from '../assets/solidity.jpg';
import IconLink from './iconlink';

const EthDev = () => {  
  return (
    <div className='flex flex-col md:flex-row justify-between px-5 xl:px-48 lg:px-24 md:py-20'>
      <div className='flex justify-center w-full'>
        
        <img src={solidityLogo} alt="F" className=' w-40 hidden md:block '/>
        
      </div>
      <div className='w-full'>
        <p className=' text-2xl font-bold'>Web3 with solidity</p>
        <p className=' text-lg'>Having knowledge of writing and deploying ethereum smart contracts for ERC20, ERC721 and ERC1155 using solidity. Deployed DAPP on rinkeby test network.</p>
        <br />
        <div className='md:text-lg'>
            <p>{'- Crypto T-Shirts'} <a href="#" className=' animate-pulse'>(Demo)</a> <IconLink link={'#'}/></p>
            <p>{'- Bank contract'} <a href="#" className=' animate-pulse'>(Demo)</a> <IconLink link={'#'}/></p>
            <p>{'- Bone coin (ERC20)'} <a href="#" className=' animate-pulse'>(Demo)</a> <IconLink link={'#'}/></p>
            
        </div>
        
      </div>
    </div>
  )
}

export default EthDev