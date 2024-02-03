import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='md:py-12 py-6 mt-12 md:mt-28 text-center flex flex-col gap-8 md:gap-12'>
        <div className='flex flex-wrap gap-2 md:gap-4 text-base justify-center'>
            <Link href="mailto:priyanshiagrawal1282@gmail.com" className='hover' rel="noopener noreferrer" target="_blank">priyanshiagrawal1282@gmail.com</Link>
            <span>||</span>
            <Link href="https://www.linkedin.com/in/priyanshi-agrawal-88b6341bb/" className='hover' rel="noopener noreferrer" target="_blank">LinkedIn</Link>
            <span>||</span>
            <Link href="https://github.com/priyanshi1282" className='hover' rel="noopener noreferrer" target="_blank">Github</Link>
            <span>||</span>
            <Link href="https://twitter.com/priyanshi1282" className='hover' rel="noopener noreferrer" target="_blank">Twitter</Link>
        </div>
        <div className='flex flex-wrap gap-4 md:gap-11 justify-center text-wrap'>
            <Link href="#hero" className='hover'>Home</Link>
            <Link href="#experience" className='hover'>Experience</Link>
            <Link href="#projects" className='hover'>Projects</Link>
        </div>
        <p className='md:text-base text-xs'>Made with &#9829; by Priyanshi ©2024</p>
    </footer>
  )
}

export default Footer