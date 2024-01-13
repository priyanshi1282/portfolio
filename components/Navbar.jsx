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
    <header>
        <nav className='flex justify-between items-center h-[60px] relative'>
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
            <div className={`nav-items md:flex md:gap-5 gap-1 md:flex-row flex-col  md:static absolute top-[55px] right-0 ${isOpen?"flex":"hidden"} md:shadow-none shadow-md md:p-0 p-4 md:rounded-none rounded md:w-auto w-36 items-end md:items-center`} >
                <Link href="/">Home</Link>
                <Link href="/">Experience</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Contact</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar