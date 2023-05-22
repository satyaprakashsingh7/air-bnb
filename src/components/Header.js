import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image src="https://links.papareact.com/qd3"
          alt="Logo"
          width={120}
          height={40}
          objectFit="contain"
          objectPosition="left"
          layout="fixed"
        />
      </div>
      {/* middle */}
      <div></div>
      {/* right */}
      <div></div>
    </div>
  )
}

export default Header
