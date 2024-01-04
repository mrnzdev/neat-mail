'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface ProvidersProps {
    children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
  return (
    <SessionProvider>{props.children}</SessionProvider>
  )
}

export default Providers