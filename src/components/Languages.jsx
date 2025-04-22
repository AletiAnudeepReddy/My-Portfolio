import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVarients=(duration)=>({
    initial:{y:-11},
    animate:{
        y:[11,-11],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})
const Languages = () => {
  return (
    <div className='border-b border-neutral-800 pb-20'>
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Languages</motion.h2>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className='text-5xl text-cyan-400'/>
                </motion.div>
                <motion.div variants={iconVarients(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-5xl'/>
                </motion.div>
                <motion.div variants={iconVarients(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-green-500'/>
                </motion.div>
            </motion.div>
        </div>
  )
}

export default Languages