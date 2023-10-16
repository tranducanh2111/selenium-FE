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
    { name: 'IELTS Exam', isHovered: false },
    { name: 'TOEIC Exam', isHovered: false },
  ]

  const handleHoverOn = (index: number) => {
    setHoveredIndex(index)
  }

  const handleHoverOff = () => {
    setHoveredIndex(-1)
  }

  return (
    <div className="w-full mt-2">
      <button
        className={`mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
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
        className={`mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/collection">
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

      <button
        className={`mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/book">
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
        className={`mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <Link href="/team">
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

      <div
        className={`overflow-hidden w-full transition-all duration-300 ${
          subMenuOpen ? 'h-auto' : 'h-0'
        }`}>
        <ul className="bg-white shadow-lg rounded">
          {mockSubmenu.map((item, index) => (
            <li key={index}>
              <a
                className={`flex px-4 pl-8 py-2 ${
                  item.isHovered
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
                href="collection"
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
    </div>
  )
}

export default Menu