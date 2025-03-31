'use client'

import { Mail, Phone } from 'lucide-react'
import SocialMedia from './SocialMedia'

export default function HeaderContact() {
  return (
    <div className="text-md border-b-4 border-amber-200 bg-sky-950 py-4 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            info@rdhlaw.com
          </span>
          <span className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            +507 6666-6666
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="mt-2 flex gap-3 sm:mt-0">
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
