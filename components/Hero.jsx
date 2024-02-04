"use client"
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id='hero'>

            {/* typewriter */}
            <div className='flex typewriter gap-6 font-mono'>
                <span>&gt;</span>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Priyanshi Agrawal').start();
                    }}
                />
            </div>

            {/* short intro */}
            <p className='md:mt-16 mt-10'>
                <span className='font-normal'>
                    Building beautiful, impactful webs.
                </span> I blend code and design to create scalable experiences that users love and developers respect. <br />
                Let's build something beautiful <Link href="#contact" className='link'>together</Link> 🌼	
            </p>
        </section>
    )
}

export default Hero