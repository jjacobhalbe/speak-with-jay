import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    'Start',
    'O szkole',
    'Oferta',
    'Lektorzy',
    'Cennik',
    'FAQ',
    'Sklep',
    'Kursy maturalne',
    'Pakiety',
    'Zapisz się',
    'Logowanie',
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-sm border-b border-gray-200' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-gray-900">SpeakWithJay.pl</div>
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-800 hover:text-yellow-500 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
