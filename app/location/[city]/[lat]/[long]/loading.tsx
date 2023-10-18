import { SunIcon } from '@heroicons/react/solid'
import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-slate-600 bg-gradient-to-tr from-[#394F68] to-[rgb(24,59,126)]'>
        <SunIcon className='h-24 w-24 animate-bounce text-yellow-500' color="yellow" />
        <h1 className='text-5xl font-bold text-center mb-10 animate-pulse'>Loading City Weather Information</h1>
        <h2 className="text-xl font-bold text-center mb-10 animate-pulse">We are busy crunching numbers and will have your results shortly!</h2>
    </div>
  )
}

export default Loading