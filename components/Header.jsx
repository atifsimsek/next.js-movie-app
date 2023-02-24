"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'

const Header = () => {

  const [keyword, setKeyword] = useState("");

  const router = useRouter()
  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/login"
    }
  ]

  const searchHandle = (e) => {
    if ((e.key === "Enter" || e.type === "click") && keyword.length >= 3) {


        router.push(`/search/${keyword}`)
    
      setKeyword("")
    }
  }


  return (
    <div className='flex items-center gap-5 h-20 p-5 select-none'>
      <Link href="/" className='bg-amber-600 p-3 text-black text-2xl font-bold'>Movie App</Link>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input value={keyword} onKeyDown={searchHandle} onChange={(e) => { setKeyword(e.target.value) }} placeholder='Search' className=' bg-transparent outline-none flex-1' type="text" />
        <BiSearch className='cursor-pointer' onClick={searchHandle} size={25} />
      </div>
      <ThemeComp />
      {
        menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))
      }
    </div>
  )
}

export default Header