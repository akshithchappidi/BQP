// components/MainComponent/Header.tsx
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <div>
          <Image src="/BQP_Logo.png" alt="Company Logo" width={150} height={50} />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <ul className={`flex space-x-4 ${isOpen ? "" : "hidden"} md:flex`}>
          <li>
            <Link href="/" className="text-2xl md:text-xl">Home</Link>
          </li>
          <li>
            <Link href="/career" className="text-2xl md:text-xl">Career</Link>
          </li>
          <li>
            <Link href="/about" className="text-2xl md:text-xl">About Us</Link>
          </li>
          <li>
            <Link href="/newsroom" className="text-2xl md:text-xl">News Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;