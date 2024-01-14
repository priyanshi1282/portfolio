"use client"
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [avatar,setAvatar]=useState(false);
    const handleMenuClick = ()=>{
        setIsOpen(!isOpen);
    }
    const handleBrandClick = ()=>{
        setAvatar(!avatar);
    }
  return (
    <header className='md:mb-20 mb-12'>
        <nav className='flex justify-between items-center h-[69px] relative z-50'>
            {/* nav header */}
            <div className="nav-header flex justify-between items-center w-full">
                {/* nav brand */}
                <div className="nav-brand font-bold cursor-pointer" onClick={handleBrandClick}>
                    {
                        avatar?<Image src="/assets/images/avatar.JPG" width={500} height={500} className='w-[50px] h-[50px] rounded-full' />: <h1 className='text-2xl'>pa.</h1>
                    }
                 
                </div>
                {/* toggle button */}
                <div className="nav-toggle md:hidden">
                    <button onClick={handleMenuClick}><CiMenuFries /></button>
                </div>
            </div>
            {/* nav-items */}
            <div className={`nav-items ${isOpen?"flex":"hidden"} `} >
                <Link className='hover' href="/">Home</Link>
                <Link className='hover' href="/">Experience</Link>
                <Link className='hover' href="/">Projects</Link>
                <Link className='hover' href="/">Contact</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar