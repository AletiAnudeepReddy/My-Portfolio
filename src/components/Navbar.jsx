import React from 'react'
import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaGithub} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'> 
        <h1 className='text-3xl mx-2 w-11 font-bold'>AR</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
      </div>
    </nav>
  )
}

export default Navbar