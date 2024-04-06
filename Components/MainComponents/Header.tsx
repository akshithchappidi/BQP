// components/MainComponent/Header.tsx
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <div className="flex justify-between w-full"> {/* Flex container for logo and links */}
          <div className="justify-start">
            <Image src="/BQP_Logo.png" alt="Company Logo" width={150} height={50} />
          </div>
          <div className="justify-end hidden md:flex pt-16"> {/* Hidden on small screens, visible on medium and larger screens */}
            <ul className="flex space-x-4 md:space-x-8"> {/* Flex container for links */}
              <li>
                <Link href="/" legacyBehavior><a className="text-2xl md:text-xl">Home</a></Link>
              </li>
              <li>
                <Link href="/career" legacyBehavior><a className="text-2xl md:text-xl">Career</a></Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior><a className="text-2xl md:text-xl">About Us</a></Link>
              </li>
              <li>
                <Link href="/newsroom" legacyBehavior><a className="text-2xl md:text-xl">News Room</a></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;