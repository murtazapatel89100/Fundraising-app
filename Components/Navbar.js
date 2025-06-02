"use client"
import React, { use, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  if (session) {
  }
  return (
    <nav className='bg-gray-900 sticky top-0 z-40 px-4 h-16 items-center text-white text-lg flex justify-between' >
      <div>
        <Link className="logo flex font-bold" href={"/"}>
        <Image width={35} height={35} src="/tea.gif" alt="image" />
        <span>GetMeAChai</span>
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul> */}
      <div>
        {session && <><div className="relative inline-block"><button onClick={()=>setshowdropdown(!showdropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className ="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
          <div id="dropdown" onBlur={()=>{setshowdropdown(false)}} className ={`z-50 ${showdropdown?"":"hidden"} bg-white right-0 mr-5 mt-3 divide-y absolute divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className ="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href={"/Dashboard"} className ="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className ="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Profile</Link>
              </li>
              <li>
                <Link href="#" className ="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
              </li>
              <li>
                <Link href="#" onClick={() => signOut()} className ="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          </div></>
        }
        {!session &&
          <Link href={"/Login"}>
            <button className="relative  inline-flex cursor-pointer items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Login
              </span>
            </button>
          </Link>
        }
      </div>
    </nav>
  )
}

export default Navbar