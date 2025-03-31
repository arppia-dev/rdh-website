import { Header, Page } from '@/payload-types'
import { Briefcase, Building2, FileText, Globe, Home, ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

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

async function getHeaderData() {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/globals/header`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch header data')

  return res.json()
}

const Footer = async () => {
  const headerData: Header = await getHeaderData()
  const navItems = headerData?.navItems || []

  return (
    <footer className="bg-sky-950 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-4">
        {/* Logo y descripción */}
        <div>
          <Logo />
          <p className="mt-2 text-sm italic">
            En RDH & Asociados, ofrecemos soluciones legales estratégicas para empresas y
            particulares. Con un equipo de expertos en diversas áreas del derecho, garantizamos
            asesoría integral y representación confiable. Contáctanos para recibir el respaldo legal
            que tu negocio necesita.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="mb-3 font-bold">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item: { page: string | Page; id?: string | null }) => (
              <li key={item.id}>
                <Link
                  href={
                    typeof item.page !== 'string'
                      ? item.page.slug === 'home'
                        ? '/'
                        : `/${item.page.slug}`
                      : item.page
                  }
                >
                  {typeof item.page !== 'string' ? item.page.title : undefined}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="mb-3 font-bold">Consulta de servicios</h3>
          <ul className="space-y-2 text-sm">
            {services.map((service, index) => (
              <li key={index}>
                <Link href="#">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dirección y horarios */}
        <div>
          <h3 className="mb-3 font-bold">Dirección</h3>
          <p className="text-sm">
            The Century Tower, Vía Ricardo J. Alfaro, Ciudad de Panamá, Piso 10, Oficina 1007
          </p>
          <h3 className="mt-4 font-bold">Horario</h3>
          <p className="text-sm">Lunes - Viernes 08 AM - 10 PM</p>
        </div>
      </div>

      {/* Copyright y redes sociales */}
      <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/20 pt-5 text-center text-sm">
        <p>All rights reserved - RDH & Asociados</p>
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer
