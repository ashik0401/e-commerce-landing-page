import React from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'

export default function ContactInfo() {
  return (
    <div className='lg:px-30 md:px-5 px-4 sm:flex gap-10 py-2 space-y-2 sm:space-y-0 my-2'>
        <div className='flex items-center gap-2'>
            <span className='text-secondary'><CiLocationOn size={26}  /></span>
           <div>
             <h3 className='font-semibold text-secondary'>Location</h3>
            <p className='text-sm text-gray-500 '>Kashimpur,Gazipur Sadar / Gazipur</p>
           </div>
        </div>
        <div className='flex items-center gap-2'>
            <span className='text-secondary'><CiMail size={26}  /></span>
           <div>
             <h3 className='font-semibold text-secondary'>Email</h3>
            <p className='text-sm text-gray-500 '>compliance@danysknitwear.com</p>
           </div>
        </div>
    </div>
  )
}
