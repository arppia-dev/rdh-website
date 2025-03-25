import { ArrowRight, Play, PlayCircle } from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Strategic Growth Initiative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
    {
      title: 'Operational Efficiency',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
    {
      title: 'Expansion Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
    {
      title: 'Change Management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
    {
      title: 'Development Program',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
    {
      title: 'Customer Experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/business-sales-consultant-discussing-in-data-documents-at-modern-office--qjn5s7f0pcchxwe4k5w2j0vgsculqmdip2dufpgfgg.jpg',
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h5 className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-sky-800">
          SUCCESS IN ACTION
          <span className="h-0.5 w-12 bg-amber-200"></span>
        </h5>
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Explore In-Depth Case Studies <br /> Highlighting The Tangible <br /> Results Our
          Consulting Servicess
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden">
              <div className="relative w-full">
                <img src={study.image} alt={study.title} className="h-56 w-full object-cover" />
                <div className="absolute top-0 left-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-amber-200">
                    <Play className="h-6 w-6 text-sky-950" />
                  </div>
                </div>
              </div>
              <div className="z-10 -mt-10 w-10/12 border-b-4 border-amber-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{study.title}</h3>
                <p className="mb-4 text-gray-600">{study.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-sky-800 hover:underline"
                >
                  Más información
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
