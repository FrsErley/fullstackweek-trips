"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(!menuIsOpen);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="p-5 py-0 h-[93px] mx-auto flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image src="/logo.png" alt="Full Stack Week" fill />
      </div>

      {status === "unauthenticated" && (
        <button className="text-primary text-sm" onClick={handleLoginClick}>
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="rounded-full flex items-center gap-3 border border-solid border-grayLighter p-2 px-3 relative">
          <AiOutlineMenu
            onClick={handleMenuClick}
            className="cursor-pointer"
            size={16}
          />

          <Image
            height={35}
            width={35}
            alt={data.user.name!}
            src={data.user.image!}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-12 left-0 w-full h-full flex flex-col bg-white shadow-md rounded-lg justify-center items-center ">
              <button
                className="text-primary text-sm"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
