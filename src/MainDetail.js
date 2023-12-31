import React from 'react'

export default function MainDetail({name,address}) {
  return (
    <>
     
     <section className="flex flex-col items-end justify-end">
          
          <h2 className=" font-bold text-xl uppercase mb-1 md:text-3xl">{name}</h2>
          <p>{address}</p>
          </section>
    </>
  )
}
