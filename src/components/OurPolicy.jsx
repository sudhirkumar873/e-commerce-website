import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
    <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We Offer Hussle free Exchange Policy</p>
    </div>

    <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 Days Free Return Policy</p>
    </div>

    <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Best Costumer Support</p>
        <p className='text-gray-400'>We provide 24/7 Costumer Support</p>
    </div>
    </div>
  )
}

export default OurPolicy