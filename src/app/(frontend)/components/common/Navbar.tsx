export default function Navbar() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {['Inicio', 'Sobre Nosotros', 'Servicios', 'Proyectos', 'Contacto'].map((item) => (
        <div
          key={item}
          className="relative flex cursor-pointer items-center gap-1 hover:text-blue-300"
        >
          {item}
          {item === 'Inicio' && (
            <div className="absolute top-full left-0 h-0.5 w-full bg-white"></div>
          )}
        </div>
      ))}
    </nav>
  )
}
