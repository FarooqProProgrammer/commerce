import React from 'react'

const Button = ({title}) => {
  return (
    <button className="w-[100px] h-[40px] border-2">
            {title}
    </button>
  )
}

export default Button