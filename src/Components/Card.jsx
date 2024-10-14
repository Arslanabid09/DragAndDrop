import React from 'react'
import { FaFile, FaDownload, FaTimes } from 'react-icons/fa'
import { motion,useDragControls } from 'framer-motion'

const Card = ({data,reference}) => {
  let drag = useDragControls();
  return (
    <motion.div  drag whileDrag={{scale:1.1}} dragConstraints={reference} 
    dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
    className='h-auto w-[20%] rounded-[3rem] m-5 bg-zinc-900 text-slate-100 overflow-hidden flex  flex-col  gap-10 cursor-pointer  '>
        {/* Adding icon */}
        <span className='px-10 py-5'><FaFile /></span>
        {/* Adding some text */}
        <h1 className='text-center px-1'>{data.desc}</h1>
        {/* Adding file size and download */}
        <div className={`flex justify-between px-4   items-center ${data.tag.isOpen == false && 'py-7'}`}>
          <span className='font-semibold tracking-wider'>{data.fileSize}</span>
          <span className='text-sm bg-white rounded-full text-black p-[5px] cursor-pointer'>
            {data.close == true ? <FaDownload />:<FaTimes/>}
          </span>
        </div>
        {/* Footer */}
        {data.tag.isOpen == true && 
        <div className={`bg-green-600 p-4 flex justify-center w-full h-full ${data.tag.tagColor == 'blue' && 'bg-blue-800'}
        ${data.tag.tagColor =='none' && 'bg-none'}
        `}>
        <button className='font-semibold'>
          {data.tag.tagTitle}
        </button>
      </div>
        }
      </motion.div>
  )
}

export default Card