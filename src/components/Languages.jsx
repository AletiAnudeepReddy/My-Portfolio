import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Languages = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Languages</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className='text-5xl text-cyan-400'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-5xl'/>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-green-500'/>
                </div>
            </div>
        </div>
  )
}

export default Languages