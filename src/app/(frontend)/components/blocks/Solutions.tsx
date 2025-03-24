import { ArrowRight, GraduationCap, Handshake, Lightbulb, LineChart, Search } from 'lucide-react'

const services = [
  {
    title: 'Strategic Planning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Lightbulb className="text-amber-300" size={40} />,
  },
  {
    title: 'Process Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Handshake className="text-amber-300" size={40} />,
  },
  {
    title: 'Market Research',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Search className="text-amber-300" size={40} />,
  },
  {
    title: 'Business Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <LineChart className="text-amber-300" size={40} />,
  },
  {
    title: 'Change Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <GraduationCap className="text-amber-300" size={40} />,
  },
  {
    title: 'Development & Training',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <GraduationCap className="text-amber-300" size={40} />,
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
        <div className="mb-12 flex items-center justify-between">
          {/* Header */}
          <div>
            <h6 className="text-sm font-semibold tracking-wider text-white uppercase">
              Consulting Solutions
              <span className="ml-2 inline-block h-0.5 w-12 bg-amber-200"></span>
            </h6>
            <h2 className="mt-2 text-4xl font-bold text-white">We've Got Your Business Covered</h2>
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
