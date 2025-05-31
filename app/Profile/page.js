"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { data: session } = useSession()
  const router = useRouter()
  if (session) {
    router.push("/Dashboard")
    return null
  }
  return (
    <div>profile</div>
  )
}

export default Profile