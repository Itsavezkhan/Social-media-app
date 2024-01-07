import Mockman from 'mockman-js'
import React from 'react'


const ourclass = {
 width: '100vw'
}

const OurMock = () => {
  return (
    <div className='w-full bg-red-50 p-8'>
      <Mockman className={ourclass}/>
    </div>
  )
}

export default OurMock
