import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 shadow-lg">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={50}
          height={50}
          alt="vConnect logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] pl-2 font-extrabold text-white max-sm:hidden">
          VConnect
        </p>
      </Link>
      <div className="justify-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar