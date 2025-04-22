import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.7}} className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center'>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className='my-4 text-purple-200'>{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='my-4 text-purple-200'>{CONTACT.phoneNo}</motion.p>
            <a href='#' className='border-b text-purple-200'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact