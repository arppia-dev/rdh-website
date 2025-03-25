import { BarChart3, Clock, Gem, PlayCircle } from 'lucide-react'
import Image from 'next/image'

export default function Methodology() {
  return (
    <section className="relative bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Left side with image and play button */}
        <div className="relative mb-20 h-100">
          <Image
            src="https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/2023/09/business-sales-consultant-discussing-in-data-documents-at-modern-office-.jpg"
            alt="Methodology"
            className="h-100 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <PlayCircle className="h-12 w-12 text-blue-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Right side with heading and text */}
          <div>
            <h5 className="mb-2 text-sm font-semibold tracking-widest text-sky-800">
              STRATEGIC EXCELLENCE, PROVEN RESULTS
            </h5>
            <h2 className="mb-4 text-5xl leading-tight font-bold text-gray-900">
              Our Methodology For <br />
              Delivering Solutions
            </h2>
          </div>
          <div>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Industry Insights */}
          <div className="border-b-4 border-amber-200 bg-gray-100 p-6">
            <div className="flex items-start gap-4">
              <BarChart3 className="h-10 w-10 text-amber-300" />
              <div>
                <h3 className="text-xl font-bold">Industry Insights</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Innovative Strategies */}
          <div className="border-b-4 border-amber-200 bg-gray-100 p-6">
            <div className="flex items-start gap-4">
              <Clock className="h-10 w-10 text-amber-300" />
              <div>
                <h3 className="text-xl font-bold">Innovative Strategies</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Drive Sustainable Success */}
          <div className="border-b-4 border-amber-200 bg-gray-100 p-6">
            <div className="flex items-start gap-4">
              <Gem className="h-10 w-10 text-amber-300" />
              <div>
                <h3 className="text-xl font-bold">Drive Sustainable Success</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
