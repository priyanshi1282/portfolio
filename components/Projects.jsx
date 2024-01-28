import React from 'react'
import Heading from './Heading'
import projectData from '@/public/assets/json/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const data= projectData.projects;
  return (
    <section id='projects'>
        <Heading title="Projects" />
        {/* project card container */}
        <div className='flex flex-col gap-4 md:gap-16'>
        {/* project card */}
        {
            data.map((item)=>(
                <ProjectCard key={item.id} item={item} />
            ))
        }
            
        </div>

    </section>
  )
}

export default Projects