"use client"
import React, { use } from 'react'
import { SessionProvider } from "next-auth/react"

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default SessionWrapper