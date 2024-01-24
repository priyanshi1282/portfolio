import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = () => {
  return (
    <div>
        <div>
            <p>date</p>
            <p>location</p>
        </div>
        <div>
            <div>
                <Image width={100} height={100} />
                <div>
                    <p>company name <Link href="/"><FaExternalLinkAlt /></Link></p>
                    <p>job title</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quae ipsa laborum eos mollitia adipisci debitis atque deleniti dignissimos quo.</p>
            <Image width={150} height={150} />
        </div>
    </div>
  )
}

export default ExperienceCard