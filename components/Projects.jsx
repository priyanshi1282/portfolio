import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

const Projects = () => {
  return (
    <section>
        <Heading title="Projects" />

        {/* project card */}
        <div>
            <div>
                <Image src="/assets/images/project_dermdetect.png" width={500} height={500}></Image>
                <div>
                    <h1>DermDetect</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat commodi quo corrupti id fugit possimus dolorem deleniti hic. Magni, reprehenderit.</p>
                    <div>icons</div>
                    <div>
                        <button>Live Demo</button><button>Source Code</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects