import React from 'react'
import img3 from './qr.png'

export default function Footer({name, email, website,bankAccount,bankName,phone }) {
  return (
    <>
    <footer className='footer border-t-2 border-gray-300 pt-5 bg-lightyellow'>
              <div className='flex flex-col items-center justify-center'>
              <img src={img3}  width="105" height="120" />Scan To Pay
              </div>
              <div>
              
              <ul className="flex flex-wrap items-center jujstify-between ">
                
                <li><span className="font-bold"> Name :</span>{name}</li>
                <li><span className="font-bold"> Mail :</span>{email}</li>
                <li><span className="font-bold"> Phone:</span>{phone}</li>
                <li><span className='font-bold'>Regd.Add.:</span>MIG-282, Near Shivaji Park, Kankarbagh Patna - 800020</li>
              </ul>
              </div>
             
            </footer>
    </>        
  )
}
