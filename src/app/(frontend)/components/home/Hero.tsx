import { ArrowRight, Phone } from 'lucide-react'
import HeaderMain from '../header/HeaderMain'

export default function Hero() {
  return (
    <div className="relative border-b-4 border-amber-200 bg-sky-950">
      {/* Imagen de fondo con filtro */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url("https://lambdatres.com/wp-content/uploads/2012/11/despacho-direccion-planeta-5-1-thegem-blog-default.jpg")',
        }}
      ></div>

      {/* Navbar */}
      <HeaderMain />

      <div className="relative container mx-auto flex flex-col items-start px-4 py-32 lg:px-16">
        {/* Texto principal */}
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wide text-white uppercase">
            Unlock Your Business Potential
          </span>
          <span className="h-0.5 w-20 bg-amber-200"></span>
        </div>

        <h1 className="mt-4 text-5xl leading-tight font-bold text-white">
          Strategic Consulting <br /> To Elevate Your <br /> Business Heights
        </h1>
        <p className="mt-6 max-w-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Botón y teléfono */}
        <div className="mt-8 flex items-center gap-6">
          <button className="flex items-center gap-2 bg-amber-200 px-6 py-3 font-semibold text-sky-950 hover:bg-sky-950 hover:text-white">
            Más información
            <ArrowRight size={24} />
          </button>
          <div className="flex items-center gap-2 text-white">
            <Phone size={24} />
            +507 6666-6666
          </div>
        </div>
      </div>
    </div>
  )
}
