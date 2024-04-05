// components/MainComponent/Header.tsx
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-1">
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/newsroom">News Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;