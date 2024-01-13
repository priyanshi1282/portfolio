"use client"
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = ()=>{
        setIsOpen(!isOpen);
        console.log(isOpen)
    }
  return (
    <header>
        <nav className='flex justify-between items-center h-[60px] relative'>
            {/* nav header */}
            <div className="nav-header flex justify-between items-center w-full">
                {/* nav brand */}
                <div className="nav-brand font-bold">
                    <h1>pa.</h1>
                </div>
                {/* toggle button */}
                <div className="nav-toggle md:hidden">
                    <button onClick={handleClick}><CiMenuFries /></button>
                </div>
            </div>
            {/* nav-items */}
            <div className={`nav-items md:flex md:gap-4 gap-1 md:flex-row flex-col  md:static absolute top-[72px] right-0 ${isOpen?"flex":"hidden"} md:shadow-none shadow-md md:p-0 p-4 md:rounded-none rounded md:w-auto w-36 items-end md:items-center`} >
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