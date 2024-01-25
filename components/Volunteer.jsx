import React from 'react'
import Heading from './Heading'
import ExperienceCard from './ExperienceCard';
import volunteerData from '@/public/assets/json/volunteer';

const Volunteer = () => {
  const data= volunteerData.volunteer;
  return (
    <section>
        <Heading title="Volunteer" />
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

export default Volunteer