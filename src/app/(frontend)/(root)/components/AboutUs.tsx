import { ArrowRight, CalendarDays } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-20 pb-40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-16">
        {/* Left Section */}
        <div className="relative">
          {/* Main Image */}
          <Image
            src="https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/group-of-business-consultant-working-management-big-data-and-analyze-financial-document-of-company-qjn5vabyhv6ef6iaj2qowrdok2s79yzkt5th04wukg.jpg"
            alt="Main"
            className="h-[450px] w-4/5 object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
          {/* Overlay Small Image */}
          <div className="absolute right-2 bottom-[-80px] w-3/6 bg-white p-2 shadow-xl">
            <Image
              src="https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/working-as-an-online-consultant-in-a-bank-in-the-business-clothes-of-an-office-employee--qjn5tgj7doij4cxp310qorgvzv5d8cvkanih83p16o.jpg"
              alt="Small"
              className="h-80 w-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          {/* Stats Card */}
          <div className="absolute bottom-[-40px] left-20 border-b-4 border-amber-200 bg-sky-950 p-10 text-white shadow-lg">
            <p className="text-5xl font-bold">
              100<span className="text-xl">+</span>
            </p>
            <p className="mt-4 text-sm tracking-wide uppercase">
              empresas y clientes confian <br /> en nosotros
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h6 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-sky-800 uppercase">
            Sobre Nosotros
            <span className="h-0.5 w-12 bg-amber-200"></span>
          </h6>
          <h2 className="mt-3 text-4xl leading-snug font-bold text-gray-900 capitalize">
            Somos una Firma de Abogados Dedicada a Proteger Tus Intereses
          </h2>
          <p className="mt-6 leading-relaxed text-gray-500">
            En nuestra firma, nos especializamos en ofrecer soluciones legales estratégicas y
            personalizadas para cada cliente. Con un equipo de abogados expertos en diversas áreas
            del derecho, nos comprometemos a proporcionar un servicio profesional, ético y
            eficiente.
          </p>

          {/* Cita */}
          <div className="mt-8 border-l-4 border-amber-200 pl-4 text-gray-500 italic">
            &apos; Nos destacamos por nuestra atención al detalle y nuestro enfoque orientado a
            resultados. &apos;
          </div>

          {/* Experiencia */}
          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-full bg-sky-950 p-3 text-white">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Más de 15 Años de Experiencia</h4>
              <p className="text-gray-500">
                Hemos trabajado con empresas y particulares, resolviendo casos complejos con éxito y
                ofreciendo asesoría legal de alto nivel.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-amber-200 px-6 py-3 font-semibold text-sky-950 hover:bg-sky-950 hover:text-white">
              Leer Más
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
