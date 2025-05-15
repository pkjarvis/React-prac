import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaDocker, FaGitAlt, FaNode, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div className='p-4'>
            <TbBrandNextjs className='text-7xl' />
        </div>
        <div className='p-4'>
            <SiMongodb className='text-7xl text-green-800' />
        </div>
        <div className='p-4'>
            <FaNodeJs className='text-7xl text-green-500' />
        </div>
        <div className='p-4'>
            <BiLogoPostgresql className='text-7xl text-blue-300' />
        </div>
        <div className='p-4'>
            <RiTailwindCssFill className='text-7xl text-blue-500' />
        </div>
          <div className='p-4'>
            <FaGitAlt className='text-7xl text-red-500' />
        </div>
        
        <div className='p-4'>
            <FaDocker className='text-7xl text-cyan-400' />
        </div>
      </div>
    </div>
  )
}

export default Technologies