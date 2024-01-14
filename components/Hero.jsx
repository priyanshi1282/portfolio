"use client"
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section>
            <div className='flex typewriter gap-6'>
                <span>&gt;</span>
            <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Priyanshi Agrawal').start();
        }} 
      />
            </div>
           
        </section>
    )
}

export default Hero