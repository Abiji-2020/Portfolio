import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    
      <footer
      className='
      w-full
      border-t-2 border-solid
      border-dark 
      font-medium
      text-lg'>
        <Layout className='py-8 flex items-center justify-between '>
            <span className='ml-[10%]'>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
           <div className='flex items-center mr-[10%]'>
            Build With <span className='text-primary
            text-3xl px-1'> &#9825;</span> BY &nbsp;<Link href="/" className='underline underline-offset-2'>Abinand</Link>
           </div>
           
        </Layout>
      </footer>
  )
}

export default Footer
