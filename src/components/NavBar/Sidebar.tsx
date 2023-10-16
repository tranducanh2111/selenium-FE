import React from 'react'
import Image from 'next/image'
import SideLogo from 'public/Sidebar.svg'
import HomeIcon from 'public/home-icon.svg'
import BookIcon from 'public/BookIcon.svg'
import TeamIcon from 'public/TeamIcon.svg'
import BookLib from 'public/book.svg'
import Menu from '@/components/NavBar/Menu'
import Link from 'next/link'

export interface SidebarModalProps {
  isOpen: boolean
  closeSidebar: () => void
  openSidebar: () => void
}

const SidebarModal = ({
  isOpen,
  closeSidebar,
  openSidebar,
}: SidebarModalProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 sm:z-0 ${
          isOpen ? 'block bg-black opacity-50 sm:opacity-0' : 'hidden '
        }`}
        onClick={closeSidebar}></div>

      {/* Extended sidebar */}
      <div
        className={`sm:sticky sticky top-0 inset-y-0 fixed right-0 sm:left-0 top-21 z-50 sm:z-0 bg-white mr-0 ${
          isOpen ? 'w-[230px]' : 'w-[70px] invisible sm:visible duration-0'
        } duration-100`}>
        <div
          className={`px-4 justify-between flex items-center w-full mb-[35px] ${
            !isOpen && 'hidden'
          }`}>
          <div className="hidden sm:block">
            <h2 className="text-xl font-semibold ">Dashboard</h2>
          </div>
          <button className="pl-[70px] hidden sm:block" onClick={closeSidebar}>
            <Image src={SideLogo} alt="Logo" width={20} height={20} />
          </button>
        </div>
        <div className={`${!isOpen && 'hidden'} pl-2 pt-6 sm:p-0`}>
          <Menu />
        </div>
      </div>

      {/* Small sidebar */}
      <div
        className={`bg-[#EEEEEE] hidden sm:block w-[70px] absolute z-50 sm:z-0 top-21 ${
          isOpen ? 'invisible' : 'visible'
        } duration-50`}>
        <div className="p-[8px] flex flex-col justify-items-stretch justify-start bg-white h-screen items-center">
          <div
            className="menu_bar mb-[50px] cursor-pointer"
            onClick={openSidebar}>
            <Image src={SideLogo} alt="Logo" width={20} height={20} />
          </div>
          <Link href="/">
            <div className="menu_bar mb-[36px]">
              <Image
                src={HomeIcon}
                alt="Logo"
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
          </Link>
          <Link href="/collection">
            <div className="menu_bar mb-[36px]">
              <Image
                src={BookLib}
                alt="Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </Link>
          <Link href="/book">
            <div className="menu_bar mb-[36px]">
              <Image
                src={BookIcon}
                alt="Logo"
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
          </Link>
          <Link href="/team">
            <div className="menu_bar mb-[36px]">
              <Image
                src={TeamIcon}
                alt="Logo"
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default SidebarModal