import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Companies() {
  return (
    <div className='lg:px-30 md:px-5 px-4 mt-10 py-3 my-5'>
        <Marquee className='flex '>
           
             <Image
                       src="/Vector (1).png"
                       alt="Logo"
                       width={120}
                       height={45}
                       className="object-contain md:mr-20 lg:mr-70 mr-10 "
                     />
            <Image
                       src="/Vector (2).png"
                       alt="Logo"
                       width={120}
                       height={45}
                       className="object-contain md:mr-20 lg:mr-70 mr-10"
                     />
            <Image
                       src="/Vector (3).png"
                       alt="Logo"
                       width={120}
                       height={120}
                       className="object-contain md:mr-20 lg:mr-70 mr-10"
                     />
            <Image
                       src="/Vector (4).png"
                       alt="Logo"
                       width={120}
                       height={45}
                       className="object-contain md:mr-20 lg:mr-70 mr-10"
                     />
           
        </Marquee>
    </div>
  )
}
