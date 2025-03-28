import Logo from '../common/Logo'
import Navbar from '../common/Navbar'

export default function HeaderMain() {
  return (
    <header className="text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <Navbar />

        {/* Get a Quote Button */}
        <button className="z-10 bg-sky-800 px-6 py-4 font-semibold text-white hover:bg-amber-200 hover:text-sky-950">
          Obten una cita
        </button>
      </div>
    </header>
  )
}
