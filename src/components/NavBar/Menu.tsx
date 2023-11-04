import { useState } from 'react'
import Image from 'next/image'
import BookLib from 'public/book.svg'
import HomeIcon from 'public/home-icon.svg'
import ArrowHover from 'public/arrowhover.svg'
import Arrow from 'public/arrow.svg'
import Link from 'next/link'
import BookIcon from 'public/BookIcon.svg'
import TeamIcon from 'public/TeamIcon.svg'
const Menu = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  const mockSubmenu = [
    { name: 'Shoes', isHovered: false },
    { name: 'Clothes', isHovered: false },
    { name: 'Accessories', isHovered: false },
  ]

  const handleHoverOn = (index: number) => {
    setHoveredIndex(index)
  }

  const handleHoverOff = () => {
    setHoveredIndex(-1)
  }

  return (
    <div className="w-full mt-2 relative">
      <button
        className={`mb-[16px] hover:text-[#FF6D33] focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={HomeIcon}
              alt="Home"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <p className="ml-2">Homepage</p>
          </div>
        </Link>
      </button>
      <button
        className={`hover:text-[#FF6D33] focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/store">
          <div className="flex items-center">
            <Image
              src={BookLib}
              alt="Home"
              width={22}
              height={22}
              className="w-6 h-6"
            />
            <p className="ml-2">Product</p>
          </div>
        </Link>
      </button>

      <div
        className={`overflow-hidden w-full transition-all duration-300 mb-[16px] ${
          subMenuOpen ? 'h-0' : 'h-auto'
        }`}>
        <ul className="bg-white shadow-lg rounded">
          {mockSubmenu.map((item, index) => (
            <li key={index}>
              <a
                className={`flex px-4 pl-8 py-2 ${
                  item.isHovered
                    ? 'bg-[#FF6D33] text-white'
                    : 'hover:bg-[#FF6D33] hover:text-white'
                }`}
                href="product"
                onClick={() => toggleSubMenu()}
                onMouseEnter={() => handleHoverOn(index)}
                onMouseLeave={() => handleHoverOff()}>
                <Image
                  src={index === hoveredIndex ? ArrowHover : Arrow}
                  alt="Logo"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        className={`mb-[16px] hover:text-[#FF6D33] focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/about">
          <div className="flex items-center">
            <Image
              src={BookIcon}
              alt="Home"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <p className="ml-2">About Us</p>
          </div>
        </Link>
      </button>

      <button
        className={`mb-[16px] hover:text-[#FF6D33] focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/contact">
          <div className="flex items-center">
            <Image
              src={TeamIcon}
              alt="Home"
              width={18}
              height={18}
              className="w-6 h-6"
            />
            <p className="ml-2">Contact</p>
          </div>
        </Link>
      </button>
    </div>
  )
}

export default Menu