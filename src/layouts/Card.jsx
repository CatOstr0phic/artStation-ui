import React from 'react'

export default function Card( {children, css}) {
  return (
    <section className={`form-boc-solid bg-[#202023] 
    rounded-lg px-8 py-3 mb-3 ${css}
    w-100`}>
        {children}
    </section>
  )
}
