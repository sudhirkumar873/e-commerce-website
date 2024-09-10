import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <div className='text-2xl font-medium text-gray-800'>
            Subscribe Now and Get 20% Off
        </div>
        <p className='text-gray-400 mt-3'>
            Lorem Ipsum is providing texts for the Industry in this field.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-black pl-3'>
            <input className='w-full sm:flex-1 outline-none ' type='email' placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox