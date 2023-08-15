import React from 'react'

export default function ClientDetail({clientAddress,clientName}) {
  return (
    <section className="mt-10">
            <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
            <p>{clientAddress}</p>
          </section>
  )
}
