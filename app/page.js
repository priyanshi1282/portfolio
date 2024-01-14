// works as app.js in create-react-app
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Terminal />
    </main>
  )
}
