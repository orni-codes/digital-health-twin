import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id='hero' className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
        <div className='flex flex-col gap-6 items-center md:items-start'>
          <h1 className="text-4xl lg:mt-30 md:text-left sm:text-5xl md:text-6xl xl:text-[84px] font-medium max-w-5xl">Simulating tomorrow’s
          <span className="bg-linear-to-r from-[#44e5e5] to-[#00aeae] bg-clip-text text-transparent"> health decisions — </span>Today.
        </h1>
         <p className="text-sm md:text-left sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3">Anticipate risks, visualize health trajectories, and test interventions within a safe digital environment</p>
         <button onClick={() => navigate('/signup')} className='bg-linear-to-r from-amber-500 to-orange-500 text-white px-6 py-2 max-w-60 w-full md:w-auto min-h-15 min-w-60 rounded-full cursor-pointer hover:scale-103 transition-all font-black'>Get Started</button>
         </div>
        
        <div className="relative">
            <img src={assets.hero_img} className='w-full max-w-6xl'/>
        </div>

    </div>
  )
}

export default Hero
