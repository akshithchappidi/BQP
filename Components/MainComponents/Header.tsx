// components/MainComponent/Header.tsx
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-1 z-50">
        <div className="z-50">
          <Image src="/BQP_Logo.png" alt="Company Logo" width={150} height={50} />
        </div>
        <div className="md:hidden z-50">
          {/* Added hover and active effects to the hamburger icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-gray-500 active:text-gray-800 bg-#24A2B2">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <ul className={`flex space-x-4 ${isOpen ? "" : "hidden"} md:flex`}>
          {/* Increased the font size for regular screens */}
          <li className="text-lg md:text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg md:text-xl">
            <Link href="/career">Career</Link>
          </li>
          <li className="text-lg md:text-xl">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-lg md:text-xl">
            <Link href="/newsroom">News Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;