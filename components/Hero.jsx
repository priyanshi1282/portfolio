"use client"
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section>
           <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Hello World!').start();
        }} 
      />
        </section>
    )
}

export default Hero