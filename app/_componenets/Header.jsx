"use client"
import React, { useEffect } from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
    const path = usePathname();
    const{user,isSignedIn}= useUser();

  return (
    <div className='flex justify-between items-center p-4 fixed top-0 w-full z-100 bg-white shadow-sm'>
        <div className='flex gap-4'>
            <Image src={logo} alt="logo" width={150} height={150} />
            <ul className='xl:md:sm:lg:flex hidden gap-4'>
            <Link href="/"><li className={`hover:text-purple-800 font-semibold cursor-pointer ${path=="/" && "text-purple-800"}`}>For Sale</li></Link>
           <Link href="/"> <li className= {`hover:text-purple-800 font-semibold cursor-pointer ${path=="/" && "text-purple-800"}`}>For Rent</li> </Link>
           <Link href="/"> <li className={`hover:text-purple-800 font-semibold cursor-pointer ${path=="/" && "text-purple-800"}`}>Agent Finder</li> </Link>
            </ul>
        </div>

        <div className='flex gap-2'>
            <Link href={'/add-new-listing'}><Button className="bg-purple-800 flex gap-1"> <Plus className='h-5 w-5'/> Post your Ad</Button></Link>
            {isSignedIn ? <UserButton/> : 
            <Link href={"/sign-in"}>
            <Button variant="outline">Login</Button></Link>}
        </div>
    </div>
  )
}

export default Header