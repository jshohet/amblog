import Link from 'next/link'
import React from 'react'

const HomeButton = () => {
  return (
    <div>
        <Link href="/" className='text-xl border-2 border-white hover:bg-slate-500 hover:border-black hover:text-black whitespace-nowrap p-2 rounded-md text-white'>Go home</Link>   
    </div>
  )
}

export default HomeButton