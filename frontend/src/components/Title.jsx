import React from 'react'

const Title = ({title, desc}) => {
  return (
    <>
    <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl dark:text-white'>{title}</h2>
    <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 lg:min-w-8 sm:max-w-xl pb-3 '>{desc}</p>
      
    </>
  )
}

export default Title
