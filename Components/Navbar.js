"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { data: session } = useSession();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    const closeDropdown = () => setShowDropdown(false);
    router.events?.on("routeChangeStart", closeDropdown);
    return () => router.events?.off("routeChangeStart", closeDropdown);
  }, [router]);

  return (
    <nav className="bg-gray-900 sticky top-0 z-40 px-4 h-16 items-center text-white text-lg flex justify-between">
      <Link className="logo flex items-center gap-2 font-bold" href="/">
        <Image width={35} height={35} src="/tea.gif" alt="logo" />
        <span>GetMeAChai</span>
      </Link>

      <div className="flex items-center">
        {session ? (
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.email}
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              className={`z-50 ${
                showDropdown ? "" : "hidden"
              } bg-white right-0 mr-5 mt-3 divide-y absolute divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    href="/Dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/admin/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
                <li>
                  <button className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Explore other creators
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="flex gap-8 text-base font-medium items-center">
            <li>
              <Link
                href="/"
                className="px-2 py-1 rounded-md hover:text-cyan-400 focus:text-cyan-400 focus:outline-none transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-2 py-1 rounded-md hover:text-cyan-400 focus:text-cyan-400 focus:outline-none transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Login"
                className="px-3 py-1.5 rounded-md border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
