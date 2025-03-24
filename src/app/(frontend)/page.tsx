import config from '@/payload.config'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import HeaderContact from './components/header/HeaderContact'
import Hero from './components/home/Hero'
import './globals.css'
import AboutUs from './components/blocks/AboutUs'
import Solutions from './components/blocks/Solutions'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HeaderContact />
      <Hero />
      <AboutUs />
      <Solutions />
    </>
  )
}
