import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='heading_main fc gap-1'>
        <div className="heading_div"></div>
        <h2 className="heading">{heading}</h2>
    </div>
  )
}

export default Heading