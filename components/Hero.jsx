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
                    AI and Product Engineer in Dublin.
                </span> I build AI products people can rely on: grounded in real data, tested against the cases where they fail, and shipped to real users. <br />
                Let&apos;s build something beautiful <Link href="#contact" className='link'>together</Link> 🌼	
            </p>
        </section>
    )
}

export default Hero