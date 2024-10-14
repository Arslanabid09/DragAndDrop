import React from 'react';
import { FaFile, FaDownload, FaTimes } from 'react-icons/fa';
import { motion, useDragControls } from 'framer-motion';

const Card = ({ data, reference }) => {
  let drag = useDragControls();
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragConstraints={reference}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
      className=" h-auto   md:w-[22%] rounded-[3rem] m-5 bg-zinc-900 text-slate-100 overflow-hidden flex  flex-col  gap-10 cursor-pointer"
    >
      {/* Icon */}
      <span className="px-5 py-3 sm:px-10 sm:py-5">
        <FaFile size={24} />
      </span>

      {/* Text */}
      <h1 className="text-center px-2 text-sm sm:text-base">{data.desc}</h1>

      {/* File size and download */}
      <div
        className={`flex justify-between px-4 items-center ${
          data.tag.isOpen == false && 'py-5 sm:py-7'
        }`}
      >
        <span className="font-semibold text-xs sm:text-base tracking-wider">
          {data.fileSize}
        </span>
        <span className="text-xs sm:text-sm bg-white rounded-full text-black p-[5px] cursor-pointer">
          {data.close == true ? <FaDownload /> : <FaTimes />}
        </span>
      </div>

      {/* Footer */}
      {data.tag.isOpen == true && (
        <div
          className={`bg-green-600 p-2 sm:p-4 flex justify-center w-full h-full ${
            data.tag.tagColor == 'blue' && 'bg-blue-800'
          } ${data.tag.tagColor == 'none' && 'bg-none'}`}
        >
          <button className="font-semibold text-xs sm:text-base">
            {data.tag.tagTitle}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
