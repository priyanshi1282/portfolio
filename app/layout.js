// works as index.js as in create-react-app
import './globals.css'
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'Priyanshi Agrawal | Portfolio',
  description: 'This is Portfolio of Priyanshi Agrawal showcasing her skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        {children}</body>
    </html>
  )
}
