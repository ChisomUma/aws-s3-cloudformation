import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My Static Site
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}