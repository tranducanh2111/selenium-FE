// components/Navbar.tsx
import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Link from "next/link";
import Image from 'next/image';
import SearchBar from "@/components/Input/SearchBar";
import Button from "@/components/Buttons/Button"
import SidebarModal from "@/components/NavBar/Sidebar";
import MenuSymbol from "../Icons/menu";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: { targetUrl: window.location.pathname },
    });
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }

  return (
    <>
    <nav className="h-[75px] sm:h-[86px] bg-white-800 flex items-center justify-between px-[12px] sm:px-0">
        <div className="flex justify-center items-center h-full sm:w-[272px]">
          <Link href="/">
            <div className="flex-shrink-0">
              <Image src={"/logo.png"} alt="Logo" width={120} height={120} />
            </div>
          </Link>
        </div>
        <div className="flex-1 max-w-[600px]">
          <SearchBar />
        </div>
        <div className="flex justify-center items-center sm:mr-[12px]">
          {!isAuthenticated ? (
            <div className="profile_image sm:w-[175px] flex flex-row-reverse">
            {user?.picture ?
              <Link href={"/profile"}>
                <Image
                  alt={user.name || "avatar"}
                  src={user.picture}
                  objectFit="cover"
                  width={46}
                  height={46}
                  className="rounded-full sm:border-[6px] border-[#FF5A1A] border-opacity-40"
                />
              </Link> : <Link href={"/profile"}>
              <Image
                alt={"No User's Avatar"}
                src={"/default_avatar.jpg"}
                objectFit="cover"
                width={46}
                height={46}
                className="rounded-full sm:border-[6px] border-[#FF5A1A] border-opacity-40"
              /></Link>
            }
          </div>
          ) : (
            <div className="hidden sm:flex sm:w-[175px]">
              <Button label="Log In" onClick={handleLogin} variant="primary" className="h-[40px] px-[16px]" customStyle={{ backgroundColor: 'white', border: `0`, color : `black`}}/>
              <Button label="Sign Up" onClick={handleLogin} variant="action"  className="bg-white h-[40px] px-[16px]"/>
            </div>
          )}
          <button className="ml-[25px] text-gray-600 hover:text-gray-900 block sm:hidden" onClick={openSidebar}>
            <MenuSymbol/>
          </button>
        </div>
    </nav>

    
    {/* Conditionally render the SidebarModal for screens smaller than sm */}
    <SidebarModal isOpen={isOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;