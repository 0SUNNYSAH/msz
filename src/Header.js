import React from 'react'
import img1 from './logo.png'
import img2 from './logo1.png'

export default function Header({handlePrint}) {
  return (
    <><div>
    <ul className="flex items-center justify-end flex-wrap">
    <li><button onClick={handlePrint} className="btn btn-print bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duration-300 ">Print</button></li>
    </ul>
    <div className='flex flex-col items-center justify-center'>
    <img src={img1} width="85" height="85"/>
    </div>
  </div>
    <header className="flex flex-col items-center justify-center mb-2 xl:flex-row xl:justify-between">
            <div className="md:grid grid-cols-1 flex flex-col">
              
              
              <h1 className="font-bold upper uppercase tracking-wide text-3xl mb-3">Mobile Service Zone</h1>
            </div>
            
          </header>
      </>    
  )
}
