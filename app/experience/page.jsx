// rafce
// file name will be page.jsx for every folder inside app folder
// folder created inside app folder will be traated as routing
import React from 'react'
import Link from 'next/link'
const ExperiencePage = () => {
  return (
    <div>
        <Link href='/'>
            home
        </Link>
    </div>
  )
}

export default ExperiencePage