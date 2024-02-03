// works as app.js in create-react-app
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Volunteer from '@/components/Volunteer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicApiKey = process.env.EMAILJS_PUBLIC_KEY;

  return (
    <main>
      <Navbar />
      <Hero />
      <Terminal />
      <Experience />
      <Projects />
      <Volunteer />
      <Contact serviceId={serviceId} templateId={templateId} publicApiKey={publicApiKey} />
      <Footer />
      {/* <Link href='/experience'>epx</Link> */}
    </main>
  )
}
