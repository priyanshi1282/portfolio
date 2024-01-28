import React from 'react'
import Heading from './Heading';
import ExperienceCard from './ExperienceCard';
import experienceData from '@/public/assets/json/experience';

const Experience = () => {
  const data= experienceData.experience;
  return (
    <section id='experience'>
        <Heading title="Experience" />
        <div className='flex flex-col md:gap-20 gap-10'>
        {
          data.map((item)=>(
            <ExperienceCard key={item.id} item={item} />
          ))
        }
        </div>
        
        
    </section>
  )
}

export default Experience