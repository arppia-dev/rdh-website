// import config from '@/payload.config'
// import { headers as getHeaders } from 'next/headers.js'
// import { getPayload } from 'payload'

import AboutUs from './components/AboutUs'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Methodology from './components/Methodology'
import Solutions from './components/Solutions'
import '../globals.css'

export default async function HomePage() {
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Hero />
      <AboutUs />
      <Solutions />
      <Methodology />
      <CaseStudies />
    </>
  )
}
