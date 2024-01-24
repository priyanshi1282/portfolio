import React from 'react'
import Heading from './Heading';
import ExperienceCard from './ExperienceCard';
import experienceData from '@/public/assets/json/experience';

const Experience = () => {
  const data= experienceData.experience;
  return (
    <section>
        <Heading title="Experience" />
        {
          data.map((item)=>(
            <ExperienceCard key={item.id} item={item} />
          ))
        }
        
    </section>
  )
}

export default Experience