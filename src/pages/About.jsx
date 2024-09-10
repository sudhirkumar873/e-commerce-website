import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion and innovation and a desire to revolutionize the way people shop online.Our Journey began with simple and easily customer supportive ideas and their choices to healthy lifestyle.</p>
          <p>Since our inception, we have worked tiredlessly to curate a diverse selection and the clothing essentials.We offer an extensive collection sourced from trusted brands and the suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission at Forever is very oraganized and clear about the customers's satisfaction for better fashion understanding.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We met high quality of the clothes which is there for the our customers faith and their trust on us.Each product with us is highly recognised and have been designed by very quality designers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>We met high quality of the clothes which is there for the our customers faith and their trust on us.Each product with us is highly recognised and have been designed by very quality designers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>We met high quality of the clothes which is there for the our customers faith and their trust on us.Each product with us is highly recognised and have been designed by very quality designers.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About