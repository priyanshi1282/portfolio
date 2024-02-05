import { Span } from "next/dist/trace";
import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = (props) => {
    const {
        company,
        role,
        date,
        location,
        description,
        logo,
        skills,
        url,
    } = props.item;

  return (
    <div className=" flex md:flex-row flex-col-reverse md:gap-8 gap-4">
        {/* left side - date/location */}
        <div className="md:w-3/12">
            <p className="text-base">{date}</p>
            <p className="text-xs">{location}</p>
        </div>

        {/* right side -  all info */}
        <div className="md:w-[calc(100%-25%)]">
            <div className="md:flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-white shadow-sm flex items-center p-2">
                <Image width={100} height={100} src={logo} alt="logo" />
                </div>
                <div>
                    <p className="items-center gap-3 font-medium">{company} <Link href={url} className="inline-flex" rel="noopener noreferrer" target="_blank"><FaExternalLinkAlt /></Link></p>
                    <p className="text-sm">{role}</p>
                </div>
            </div>
            
            <p className="mt-3">{description}</p>
            {
                skills!='/'?<Image width={200} height={200} src={skills} className="mt-3 max-w-[180px] h-[25px]" alt="skills" />: <span></span>
            
            }
        </div>
    </div>
  )
}

export default ExperienceCard