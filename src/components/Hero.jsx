import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>WANT TO LOOK LIKE YOUR FAVOURITE ANIME CHARACTER?</p>
      <h1 className='uppercase font-semibold text-4xl
       sm:text-5xl md:text-6xl lg:text-7xl'>ANIME<span className='text-red-400'>GYM</span></h1>
      </div>
     
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may turn into a real life <span className='text-red-400 font-medium'>ANIME CHARACTER</span>
       and have to risk my life to save the <span className='text-red-400 font-medium'>WORLD</span>. </p>

      <Button func={() => {
        window.location.href = '#generate'
        }} text={"START TRAINING"}> </Button>

    </div>
  )
}
