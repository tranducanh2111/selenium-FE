import React, { ReactNode } from 'react'
import SidebarModal from '@/components/NavBar/Sidebar'
import { usePathname } from 'next/navigation'
import Profile from '@/components/NavBar/Profile'

const Layout: React.FC<{
  children: ReactNode
  isOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  isProfileOpen: boolean
  closeProfile: () => void
}> = ({ children, isOpen, isProfileOpen, openSidebar, closeSidebar, closeProfile }) => {
  const pathName = usePathname()
  const contailURL = pathName?.split('/')[1];
  return contailURL=== 'test' ? (
    <div>{children}</div>
  ) : (
    <>
      <div className="flex justify-start overflow-x-hidden bg-black">
        {/* Sidebar */}
        <div className="relative sm:border-r-4 border-black">
          <SidebarModal
            isOpen={isOpen}
            openSidebar={openSidebar}
            closeSidebar={closeSidebar}
          />
        </div>

        {/* Content */}
        <div className="relative flex-1 min-h-[990px] sm:min-h-screen overflow-x-hidden bg-white">
          <Profile
            isProfileOpen={isProfileOpen}
            closeProfile={closeProfile}
          />
          <div className={`relative ${isProfileOpen && 'hidden sm:block'}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout