import config from '@/payload.config'
import { GraduationCap, Handshake, Lightbulb, LineChart, Search } from 'lucide-react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import HeaderContact from './components/header/HeaderContact'
import './globals.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HeaderContact />
    </>
  )
}
