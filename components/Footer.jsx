import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-12 mt-28 text-center flex flex-col gap-12'>
        <div className='flex flex-wrap gap-4 text-base justify-center'>
            <Link href="/" className='hover'>priyanshiagrawal1282@gmail.com</Link>
            <span>||</span>
            <Link href="/" className='hover'>LinkedIn</Link>
            <span>||</span>
            <Link href="/" className='hover'>Github</Link>
            <span>||</span>
            <Link href="/" className='hover'>Twitter</Link>
        </div>
        <div className='flex gap-11 justify-center text-wrap'>
            <Link href="/" className='hover'>Home</Link>
            <Link href="/" className='hover'>Experience</Link>
            <Link href="/" className='hover'>Projects</Link>
        </div>
        <p className='text-base'>Made with &#9829; by Priyanshi ©2024</p>
    </footer>
  )
}

export default Footer