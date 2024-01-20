import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section>
        <Heading title="Projects" />

        {/* project card */}
        <div>
            <div className='flex md:flex-row flex-col md:gap-10 gap-6 bg-white md:p-12 p-8 shadow-md rounded-lg'>
                <Image src="/assets/images/project_dermdetect.png" className='w-[400px]' width={500} height={500}></Image>
                <div className='flex flex-col md:gap-4 gap-2 justify-between'>
                    <h1 className='md:text-3xl text-xl font-semibold'>DermDetect</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat commodi quo corrupti id fugit possimus dolorem deleniti hic. Magni, reprehenderit.</p>
                    <div>
                        <Image src="https://skillicons.dev/icons?i=java,kotlin,nodejs,figma" width={100} height={100} />
                    </div>
                    <div className='flex md:gap-6 gap-3'>
                        <button className='btn btn-bg hover'>Live Demo <FaExternalLinkAlt /></button>
                        <button className='btn btn-outline hover'><FaGithub />Source Code</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects