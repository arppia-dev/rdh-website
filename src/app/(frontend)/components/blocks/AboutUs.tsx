import { ArrowRight, CalendarDays } from 'lucide-react'

export default function AboutUs() {
  return (
    <section className="py-20 pb-40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-16">
        {/* Left Section */}
        <div className="relative">
          {/* Main Image */}
          <img
            src="https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/group-of-business-consultant-working-management-big-data-and-analyze-financial-document-of-company-qjn5vabyhv6ef6iaj2qowrdok2s79yzkt5th04wukg.jpg"
            alt="Main"
            className="h-[450px] w-4/5 object-cover"
          />
          {/* Overlay Small Image */}
          <div className="absolute right-2 bottom-[-80px] w-3/6 bg-white p-2 shadow-xl">
            <img
              src="https://elkit.wirastudio.co/consult/wp-content/uploads/sites/40/elementor/thumbs/working-as-an-online-consultant-in-a-bank-in-the-business-clothes-of-an-office-employee--qjn5tgj7doij4cxp310qorgvzv5d8cvkanih83p16o.jpg"
              alt="Small"
              className="h-52 object-cover"
            />
          </div>
          {/* Stats Card */}
          <div className="absolute bottom-[-40px] left-20 border-b-4 border-amber-200 bg-sky-950 p-10 text-white shadow-lg">
            <p className="text-5xl font-bold">
              100<span className="text-xl">+</span>
            </p>
            <p className="mt-4 text-sm tracking-wide uppercase">
              negocios confian <br /> en nosotros
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h6 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-sky-800 uppercase">
            Sobre Nosotros
            <span className="h-0.5 w-12 bg-amber-200"></span>
          </h6>
          <h2 className="mt-3 text-4xl leading-snug font-bold text-gray-900">
            We Are Business Consultants Dedicated To Driving Your Success
          </h2>
          <p className="mt-6 leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Cita */}
          <div className="mt-8 border-l-4 border-amber-200 pl-4 text-gray-500 italic">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. "
          </div>

          {/* Experiencia */}
          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-full bg-sky-950 p-3 text-white">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold">15 Years Of Experience</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
