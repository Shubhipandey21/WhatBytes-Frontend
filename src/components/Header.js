import React from 'react';
import Image from 'next/image';
import LogoImg from  '../../public/WhatBtesLogo.png'
const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4 border-b-2">
        {/* Logo Section */}
        <div className="">
        <Image
        src={LogoImg}
        alt="Description of the image"
        width={300} // Adjust as needed
        height={100} // Adjust as needed
        className=""
      />
        </div>
  
        {/* Profile Section */}
        <div className="flex items-center gap-2 box-border h-12 w-48 p-4 border-2 rounded-md">
          <img
            src="/profile.png" // Replace with actual profile image URL
            alt="Profile"
            className="w-8 h-8 "
          />
          
          <span className="text-sm font-medium">Rahil Siddique</span>
        </div>
      </header>
    );
  };
  
  export default Header;
  