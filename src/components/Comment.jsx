import React from 'react'

export default function Comment({textareaList}) {
  return (
    <section>
        <ul className="w-100 py-3">
        {textareaList.length > 0 ? (
          textareaList.map((item) => (
            <div
              key={item.id}
              className="border-b w-[85%] h-10 
              border-zinc-600 bg-transparent p-2"
            >
              {item}
            </div>
          ))
          
        ) : (
          <div className="text-lg font-semibold 
          text-slate-500">
            No Comments!
          </div>
        )}
      </ul>
    </section>
  )
}
