import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const ProjectCard = (props) => {
  return (
    <div className='flex md:items-center md:flex-row flex-col md:gap-10 gap-6 bg-white md:p-12 p-6 shadow-md rounded-lg '>
                {props.item.banner != "/" ? <Image src={props.item.banner} width={500} height={500} className='w-[300px] h-fit' alt='banner' /> : <div className='w-[300px] min-h-[170px] shrink-0 rounded-md bg-[#5A5D7A] text-white font-mono flex items-center justify-center p-6 text-center'>&gt; {props.item.title}</div>}
                <div className='flex flex-col md:gap-4 gap-3 justify-between'>
                    <h1 className='md:text-3xl text-xl font-semibold'>{props.item.title}</h1>
                    <p className='text-base'>{props.item.description}</p>
                    <div>
                        <Image src={props.item.skills} width={200} height={200} className='w-auto md:h-[25px] h-[20px]' alt='skills' />
                    </div>
                    <div className='flex md:gap-6 gap-3'>
                        {props.item.demo != "/" ? <Link className='btn btn-bg hover' href={props.item.demo} rel="noopener noreferrer" target="_blank"> Live Demo <FaExternalLinkAlt /></Link> : <span></span>}
                        {
                            props.item.repo!="/" ? <Link href={props.item.repo} className='btn btn-outline hover' rel="noopener noreferrer" target="_blank"><FaGithub />Source Code</Link> : <span></span>
                        }
                        
                    </div>
                </div>
            </div>
  )
}

export default ProjectCard