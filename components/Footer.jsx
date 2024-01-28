import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='md:py-12 py-6 mt-12 md:mt-28 text-center flex flex-col gap-8 md:gap-12'>
        <div className='flex flex-wrap gap-2 md:gap-4 text-base justify-center'>
            <Link href="/" className='hover'>priyanshiagrawal1282@gmail.com</Link>
            <span>||</span>
            <Link href="/" className='hover'>LinkedIn</Link>
            <span>||</span>
            <Link href="/" className='hover'>Github</Link>
            <span>||</span>
            <Link href="/" className='hover'>Twitter</Link>
        </div>
        <div className='flex flex-wrap gap-4 md:gap-11 justify-center text-wrap'>
            <Link href="/" className='hover'>Home</Link>
            <Link href="/" className='hover'>Experience</Link>
            <Link href="/" className='hover'>Projects</Link>
        </div>
        <p className='md:text-base text-xs'>Made with &#9829; by Priyanshi ©2024</p>
    </footer>
  )
}

export default Footer