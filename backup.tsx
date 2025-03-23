/* 
amber-100
sky-950
sky-800
slate-600
slate-200 
*/
const services = [
  {
    title: 'Strategic Planning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Lightbulb className="h-6 w-6" />,
    bgColor: 'bg-blue-700',
    textColor: 'text-white',
    linkColor: 'text-orange-400',
    borderColor: 'border-orange-400',
    hoverColor: 'hover:bg-blue-800',
  },
  {
    title: 'Process Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Handshake className="h-6 w-6 text-orange-500" />,
  },
  {
    title: 'Market Research',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Search className="h-6 w-6 text-orange-500" />,
  },
  {
    title: 'Business Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <LineChart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: 'Change Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <GraduationCap className="h-6 w-6 text-orange-500" />,
  },
  {
    title: 'Development & Training',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <GraduationCap className="h-6 w-6 text-orange-500" />,
  },
]
{
  /* Topbar ------------------------------------------------------------------------------------------------------------*/
}
{
  /* Hero ------------------------------------------------------------------------------------------------------------ */
}
;<div className="relative bg-blue-900">
  {/* Imagen de fondo con filtro */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{ backgroundImage: 'url("/your-image.jpg")' }}
  ></div>

  <div className="relative container mx-auto flex flex-col items-start px-4 py-32 lg:px-16">
    {/* Texto principal */}
    <span className="font-semibold tracking-wide text-orange-400 uppercase">
      Unlock Your Business Potential
    </span>
    <h1 className="mt-4 text-5xl leading-tight font-bold text-white">
      Strategic Consulting <br /> To Elevate Your <br /> Business Heights
    </h1>
    <p className="mt-6 max-w-2xl text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
      ullamcorper mattis, pulvinar dapibus leo.
    </p>

    {/* Botón y teléfono */}
    <div className="mt-8 flex items-center gap-6">
      <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
      <div className="flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10l1.5-1.5a5.5 5.5 0 018 0L14 10m-4 2v4m-2-2h4"
          />
        </svg>
        123 456 789
      </div>
    </div>

    {/* Tarjeta de Business Strategy */}
    <div className="absolute right-0 bottom-0 w-72 bg-blue-600 px-6 py-4 text-white">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3a6 6 0 000 12h4.5a6 6 0 100-12h-4.5zM9 9h6m-3 3V6"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-bold">Business Strategy</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </div>
</div>
{
  /* Hero ------------------------------------------------------------------------------------------------------------ */
}
{
  /* About ------------------------------------------------------------------------------------------------------------ */
}
;<section className="py-20">
  <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-16">
    {/* Left Section */}
    <div className="relative">
      {/* Main Image */}
      <img src="/main-image.jpg" alt="Main" className="h-[450px] w-full rounded-lg object-cover" />
      {/* Overlay Small Image */}
      <div className="absolute bottom-[-40px] left-16 rounded-xl bg-white shadow-xl">
        <img src="/small-image.jpg" alt="Small" className="h-52 w-40 rounded-xl object-cover" />
      </div>
      {/* Stats Card */}
      <div className="absolute bottom-0 left-0 rounded-lg bg-blue-700 px-6 py-4 text-white shadow-lg">
        <p className="text-3xl font-bold">
          680<span className="text-xl">+</span>
        </p>
        <p className="text-sm tracking-wide uppercase">Business Trust Us</p>
      </div>
    </div>

    {/* Right Section */}
    <div>
      <h6 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-400 uppercase">
        About Us
        <span className="h-0.5 w-12 bg-orange-500"></span>
      </h6>
      <h2 className="mt-3 text-4xl leading-snug font-bold text-gray-900">
        We Are Business Consultants Dedicated To Driving Your Success
      </h2>
      <p className="mt-6 leading-relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </p>

      {/* Quote */}
      <div className="mt-8 border-l-4 border-orange-500 pl-4 text-gray-500 italic">
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo. "
      </div>

      {/* Experience */}
      <div className="mt-8 flex items-center gap-4">
        <div className="rounded-full bg-blue-100 p-3 text-blue-600">
          {/* <CalendarDays className="w-6 h-6" /> */}
        </div>
        <div>
          <h4 className="text-lg font-bold">15 Years Of Experience</h4>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
          Learn More →
        </button>
      </div>
    </div>
  </div>
</section>
{
  /* About ------------------------------------------------------------------------------------------------------------ */
}
{
  /* Services ------------------------------------------------------------------------------------------------------------ */
}
;<section className="relative bg-gray-50 py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: 'url("/background.jpg")', opacity: 0.2 }}
  ></div>

  <div className="relative z-10 container mx-auto px-6 lg:px-16">
    {/* Header */}
    <div className="mb-12 text-center">
      <h6 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        Consulting Solutions
        <span className="ml-2 inline-block h-0.5 w-12 bg-orange-500"></span>
      </h6>
      <h2 className="mt-2 text-4xl font-bold text-gray-900">We've Got Your Business Covered</h2>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className={`rounded-lg border-t-4 p-6 shadow-lg ${
            service.bgColor || 'bg-white'
          } ${service.borderColor || 'border-orange-500'} ${
            service.hoverColor || 'hover:bg-gray-100'
          } transition duration-300`}
        >
          <div className={`mb-4 flex items-center gap-4 ${service.textColor || 'text-gray-900'}`}>
            <div className="rounded-full bg-gray-100 p-3">{service.icon}</div>
            <h4 className="text-xl font-semibold">{service.title}</h4>
          </div>
          <p className={`mb-6 text-gray-600`}>{service.description}</p>
          <a
            href="#"
            className={`flex items-center gap-2 font-semibold ${
              service.linkColor || 'text-orange-500'
            } hover:underline`}
          >
            Learn more →
          </a>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-12 text-center">
      <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
        Discover All →
      </button>
    </div>
  </div>
</section>
{
  /* Services ------------------------------------------------------------------------------------------------------------ */
}

{
  /* Services2 ------------------------------------------------------------------------------------------------------------ */
}
;<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Left side with video */}
      <div>
        <div className="relative">
          <img
            src="/images/methodology.jpg"
            alt="Methodology"
            className="h-auto w-full rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right side with text */}
      <div>
        <h6 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
          Strategic Excellence, Proven Results
          <span className="ml-2 inline-block h-0.5 w-10 bg-orange-500"></span>
        </h6>
        <h2 className="mt-4 text-4xl font-bold text-gray-800">
          Our Methodology For Delivering Solutions
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p className="mt-2 text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-lg bg-blue-600 p-6 text-white shadow-lg">
        <LineChart className="mb-4 h-10 w-10 text-white" />
        <h3 className="text-xl font-bold">Industry Insights</h3>
        <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="rounded-lg border-t-4 border-orange-500 bg-white p-6 shadow-lg">
        <Rocket className="mb-4 h-10 w-10 text-orange-500" />
        <h3 className="text-xl font-bold">Innovative Strategies</h3>
        <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="rounded-lg border-t-4 border-orange-500 bg-white p-6 shadow-lg">
        <Trophy className="mb-4 h-10 w-10 text-orange-500" />
        <h3 className="text-xl font-bold">Drive Sustainable Success</h3>
        <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</section>

{
  /* Services2 ------------------------------------------------------------------------------------------------------------ */
}

{
  /* Services3 ------------------------------------------------------------------------------------------------------------ */
}
;<section className="relative bg-blue-900 text-white">
  <div className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      {/* Left side with image and text */}
      <div className="relative">
        <img src="/images/methodology.jpg" alt="Methodology" className="h-auto w-full rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right side with heading and text */}
      <div>
        <h2 className="text-4xl font-bold">
          We Offer A Unique Business Analysis To Growth Strategies Designed To Meets Specific Need
        </h2>
        <button className="mt-4 flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white">
          Learn More →
        </button>
        <div className="mt-6 rounded-lg bg-blue-700 p-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-10 w-10 text-orange-400" />
            <div>
              <h3 className="text-xl font-bold">Strategic Services</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-4 border-t border-blue-600 pt-4">
            <Settings2 className="h-10 w-10 text-orange-400" />
            <div>
              <h3 className="text-xl font-bold">Custom Needs</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="mt-12 grid grid-cols-2 gap-8 rounded-lg bg-blue-800 p-8 text-center md:grid-cols-4">
      <div>
        <h3 className="text-3xl font-bold">680+</h3>
        <p className="text-sm">Business Trust Us</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">1,354</h3>
        <p className="text-sm">Projects Done</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">97%</h3>
        <p className="text-sm">Success Rate</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">15Y</h3>
        <p className="text-sm">Years Of Experience</p>
      </div>
    </div>
  </div>
</section>
{
  /* Services3 ------------------------------------------------------------------------------------------------------------ */
}
