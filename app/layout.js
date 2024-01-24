// works as index.js as in create-react-app
import './globals.css'

export const metadata = {
  title: 'Priyanshi Agrawal | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
