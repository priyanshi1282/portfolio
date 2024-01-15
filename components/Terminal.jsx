import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const Terminal = () => {
    return (
        <section className='md:mt-16 mt-10 font-mono w-full'>
            {/* terminal header */}
            <div className='bg-[#5A5D7A] rounded-lg shadow-xl'>
                <div className='bg-[#E4E3E5] rounded-t-lg flex text-sm p-2 gap-2'>
                    <div className="text-[#F96256]"><FaCircle /></div>
                    <div className="text-[#FDBC3D]"><FaCircle /></div>
                    <div className="text-[#33C948]"><FaCircle /></div>
                </div>
                {/* terminal body */}
                <div className='md:p-10 p-4 flex flex-col gap-6 break-words'>
                    {/* terminal item - location */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.currentLocation</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p>"Indore, India"</p>
                        </div>
                    </div>

                    {/* terminal item - contact info */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.contactInfo</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p>["<Link className="terminal-link" href="/">priyanshiagrawal1282@gmail.com</Link>", "<Link className="terminal-link" href="/">LinkedIn</Link>", "<Link className="terminal-link" href="/">Github</Link>"]</p>
                        </div>
                    </div>

                    {/* terminal item - resume */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.resume</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p> "<Link className="terminal-link" href="/">priyanshi.pdf</Link>"</p>
                        </div>
                    </div>

                    {/* terminal item - education */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.education</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p>"Btech/Computer Science & Engineering - Medi-Caps University"</p>
                        </div>
                    </div>

                    {/* terminal item - skills */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.skills</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p>
                                ["Core Java", "React JS", "Tailwind/Bootstrap", "Git", "Designing"]
                            </p>
                        </div>
                    </div>

                    {/* terminal item - interests */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <p>Priyanshi.interests</p>
                        </div>
                        {/* ans */}
                        <div className="ans">
                            <p>
                                ["Mentoring", "Art & Craft", "Organizing"]
                            </p>
                        </div>
                    </div>

                    {/* terminal item - blank */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <div className="cursor"></div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Terminal