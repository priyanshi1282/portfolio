import React from 'react'

const Heading = (props) => {
  return (
    <h1 className='font-bold text-center md:mt-20 md:mb-24 mt-16 mb-20 decoration-[#747FE0] decoration-8 underline underline-offset-[18px] text-2xl'>
        {props.title}
    </h1>
  )
}

export default Heading