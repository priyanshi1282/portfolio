// works as app.js in create-react-app
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href='/experience'>
        experience
      </Link>
    </main>
  )
}
