import React from 'react'
import Menu from '@/components/NavBar/Menu'
import MenuSymbol from '@/components/Icons/menu'
import BookSymbol from '@/components/Icons/book'

interface SidebarModalProps {
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
    <nav className='sticky top-0 z-50'>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity z-50 ${
          isOpen ? 'block z-50' : 'hidden'
        }`}
        onClick={closeSidebar}></div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform -translate-x-full transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex justify-between items-center">
          {/* <button
            className="p-6 text-gray-600 hover:text-gray-900 absolute top-[20px] right-0"
            onClick={closeSidebar}>
            <Image src={SideLogo} alt="Logo" width={30} height={30} />
          </button> */}
          <div className="p-4 mt-[20px]">
            {/* Sidebar content goes here */}
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          </div>
        </div>
        <Menu />
      </div>
      <div className="bg-[#EEEEEE] hidden sm:block w-[70px] absolute top-20">
        <div className="p-[8px] pl-[16px] flex flex-col justify-items-stretch justify-start bg-white h-[200px] max-h-[540px] space-y-[16px]">
          <div
            className="menu_bar cursor-pointer mx-auto"
            onClick={openSidebar}>
            <MenuSymbol />
          </div>
          <div className="menu_bar mx-auto">
            <BookSymbol />
          </div>
          <div className="menu_bar mx-auto">
            <BookSymbol />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default SidebarModal
