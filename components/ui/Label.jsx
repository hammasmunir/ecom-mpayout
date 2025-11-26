import React from 'react'

const Label = ({text, icon}) => {
  return (
    <div className='text-sm border border-[#E0E0E0] py-2 px-3 rounded-full bg-white shadow-md text-black flex items-center gap-2'>{icon && icon} {text}</div>
  )
}

export default Label