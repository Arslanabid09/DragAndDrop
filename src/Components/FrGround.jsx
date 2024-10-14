import React, { useRef } from 'react'
import Card from './Card'

const FrGround = () => {
  const data = [
    {desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ex! Lorem, ipsum dolor Lorem ipsum dolor sit amet.',
      fileSize:'.9mb',
      close: true,
      tag:{isOpen:true,tagTitle:'Download Now',tagColor:'green'}
    },
    {desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ex! Lorem, ipsum dolor Lorem ipsum dolor sit amet adipisicing elit. Maxime, ex! Lorem, ipsum dolor Lorem ipsum dolor sit amet.',
      fileSize:'.4mb',
      close: false,
      tag:{isOpen:false,tagTitle:'Download Now',tagColor:'none'}
    },
    {desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ex! Lorem, ipsum dolor Lorem ipsum dolor sit amet.',
      fileSize:'.10mb',
      close: true,
      tag:{isOpen:true,tagTitle:'Download Now',tagColor:'blue'}
    }
  ]
  const ref = useRef();
  return (
    <div ref={ref} className='fixed flex  items-start top-0 w-full h-full  '>
      {data.map((item,index)=>(
        <Card key={index} reference={ref} data={item}/>
      ))}
    </div>
  )
}

export default FrGround
