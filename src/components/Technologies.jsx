import React from 'react'
import { BiLogo99Designs, BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'

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


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVarients(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-5xl'/>
            </motion.div>
            <motion.div variants={iconVarients(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-5xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-5xl text-red-700'/>
            </motion.div>
            <motion.div variants={iconVarients(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-5xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVarients(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-5xl text-sky-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies