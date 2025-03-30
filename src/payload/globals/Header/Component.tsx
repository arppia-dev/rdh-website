'use client'

import useSWR from 'swr'
import { HeaderClient } from './Component.client'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Header() {
  const { data: headerData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/header`,
    fetcher,
  )

  if (error) return <div>Error loading header</div>
  if (!headerData) return <div>Loading...</div>

  return <HeaderClient data={headerData} />
}
