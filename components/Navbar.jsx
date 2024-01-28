"use client"
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [avatar, setAvatar] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }
    const handleBrandClick = () => {
        setAvatar(!avatar);
    }
    return (
        <header className='md:mb-20 mb-10'>
            <nav className='flex justify-between items-center  h-[70px] md:h-[89px] relative z-50'>
                {/* nav header */}
                <div className="nav-header flex justify-between items-center w-full">
                    {/* nav brand */}
                    <div className="nav-brand font-bold cursor-pointer" onClick={handleBrandClick}>
                        {
                            // avatar ? <Image src="/assets/images/avatar.png" width={500} height={500} className='w-[50px] h-[50px] rounded-full' /> : <h1 className='text-3xl'>pa.</h1>

                            avatar?<h1 className='md:text-3xl text-xl'>🌼</h1>:<h1 className='md:text-3xl text-xl'>pa.</h1>
                        }

                    </div>
                    {/* toggle button */}
                    <div className="nav-toggle md:hidden">
                        <button onClick={handleMenuClick}><CiMenuFries /></button>
                    </div>
                </div>
                {/* nav-items */}
                <div className={`nav-items ${isOpen ? "flex" : "hidden"} `} >
                    <Link className='hover' href="#hero">Home</Link>
                    <Link className='hover' href="#experience">Experience</Link>
                    <Link className='hover' href="#projects">Projects</Link>
                    <Link className='hover' href="#contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar