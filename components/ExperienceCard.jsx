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
    <div>
        <div>
            <p>{date}</p>
            <p>{location}</p>
        </div>
        <div>
            <div>
                <Image width={100} height={100} src={logo} />
                <div>
                    <p>{company} <Link href={url}><FaExternalLinkAlt /></Link></p>
                    <p>{role}</p>
                </div>
            </div>
            <p>{description}</p>
            <Image width={150} height={150} src={skills} />
        </div>
    </div>
  )
}

export default ExperienceCard