// works as app.js in create-react-app
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Link href='/experience'>
        experience
      </Link>
    </main>
  )
}
