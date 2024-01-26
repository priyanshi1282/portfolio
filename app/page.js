// works as app.js in create-react-app
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Volunteer from '@/components/Volunteer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Terminal />
      <Experience />
      <Projects />
      <Volunteer />
      <Contact />
      {/* <Link href='/experience'>epx</Link> */}
    </main>
  )
}
