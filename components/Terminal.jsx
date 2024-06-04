"use client"
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

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
                            <p>&quot;Indore, India&quot;</p>
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
                            <p>[&quot;<Link className="terminal-link" href="mailto:priyanshiagrawal1282@gmail.com" rel="noopener noreferrer" target="_blank">priyanshiagrawal1282@gmail.com</Link>&quot;, &quot;<Link className="terminal-link" href="https://www.linkedin.com/in/priyanshi-agrawal-88b6341bb/" rel="noopener noreferrer" target="_blank">LinkedIn</Link>&quot;, &quot;<Link className="terminal-link" href="https://github.com/priyanshi1282" rel="noopener noreferrer" target="_blank">Github</Link>&quot;]</p>
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
                            <p> &quot;<Link className="terminal-link" href="/assets/priyanshi.pdf" rel="noopener noreferrer" target="_blank">priyanshi.pdf</Link>&quot;</p>
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
                            <p>&quot;Btech/Computer Science & Engineering - Medi-Caps University&quot;</p>
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
                                [&quot;Java&quot;, &quot;React JS&quot;, &quot;Sass&quot;, &quot;Tailwind/Bootstrap&quot;, &quot;Git/Github&quot;, &quot;MySQL&quot;, &quot;Figma/Canva&quot;]
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
                                [&quot;Mentoring&quot;, &quot;Art & Craft&quot;, &quot;Graphic Design&quot;]
                            </p>
                        </div>
                    </div>

                    {/* terminal item - blank */}
                    <div className="terminal-item">
                        {/* ques */}
                        <div className="ques">
                            <p>&gt;</p>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(' ').start();
                                }}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Terminal