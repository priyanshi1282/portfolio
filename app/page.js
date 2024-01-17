// works as app.js in create-react-app
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Experience from '@/components/Experience';
import Projects
 from '@/components/Projects';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Terminal />
      <Experience />
      <Projects />
    </main>
  )
}
