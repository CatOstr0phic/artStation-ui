import React from 'react'

export default function Container( {children}) {
  return (
    <section className='w-100 mt-[70px] sm:mt-[80px]'>
        {children}
    </section>
  )
}
