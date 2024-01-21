import React from 'react'
import Heading from './Heading'
import projectData from '@/public/assets/json/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const data= projectData.projects;
  return (
    <section>
        <Heading title="Projects" />
        {/* project card container */}
        <div>
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