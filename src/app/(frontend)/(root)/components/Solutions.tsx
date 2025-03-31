import { ArrowRight, Briefcase, Building2, FileText, Globe, Home, ShieldAlert } from 'lucide-react'

const services = [
  {
    title: 'Derecho Corporativo',
    description:
      'Asesoría en constitución de empresas, fusiones, adquisiciones y contratos comerciales.',
    icon: <Building2 className="text-amber-300" size={40} />,
  },
  {
    title: 'Derecho Laboral',
    description:
      'Redacción de contratos laborales, asesoría en despidos y resolución de conflictos laborales.',
    icon: <Briefcase className="text-amber-300" size={40} />,
  },
  {
    title: 'Derecho Penal',
    description:
      'Defensa penal empresarial, cumplimiento normativo y representación en investigaciones legales.',
    icon: <ShieldAlert className="text-amber-300" size={40} />,
  },
  {
    title: 'Derecho Tributario',
    description:
      'Asesoría fiscal, planeación tributaria, litigios fiscales y representación ante la ANIP.',
    icon: <FileText className="text-amber-300" size={40} />,
  },
  {
    title: 'Derecho Inmobiliario',
    description:
      'Asesoría en compraventa de bienes raíces, contratos de arrendamiento y fideicomisos inmobiliarios.',
    icon: <Home className="text-amber-300" size={40} />,
  },
  {
    title: 'Derecho Migratorio',
    description: 'Visas, permisos de trabajo y representación legal en trámites migratorios.',
    icon: <Globe className="text-amber-300" size={40} />,
  },
]

export default function Solutions() {
  return (
    <section className="relative bg-sky-950 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url("https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/2023/09/mature-business-coach-or-speaker-make-flip-chart-presentation-to-diverse-businesspeople-at-meeting.jpg")',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          {/* Header */}
          <div>
            <h6 className="text-sm font-semibold tracking-wider text-white uppercase">
              Nuestros Servicios Legales
              <span className="ml-2 inline-block h-0.5 w-12 bg-amber-200"></span>
            </h6>
            <h2 className="mt-2 text-4xl font-bold text-white">
              Asesoría jurídica especializada para <br />
              proteger tu empresa y patrimonio.
              <br /> Desde derecho corporativo hasta litigios, <br />
              nuestro equipo te ofrece soluciones legales a la medida.
            </h2>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="flex items-center gap-2 bg-amber-200 px-6 py-3 font-semibold text-sky-950 hover:bg-sky-950 hover:text-white">
              Descubre todos
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b-4 border-amber-200 bg-white p-10 hover:bg-sky-800 hover:text-white"
            >
              <div className={`mb-4 flex flex-col gap-4 text-gray-900 group-hover:text-white`}>
                <div className="p-3 text-4xl">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
              <p className={`mb-6 text-gray-600 group-hover:text-white`}>{service.description}</p>
              <a
                href="#"
                className="flex items-center gap-2 font-semibold text-sky-800 group-hover:text-white hover:underline"
              >
                Más información
                <ArrowRight size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
