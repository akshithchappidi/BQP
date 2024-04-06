import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobile = windowWidth <= 768;

  return (
    <div className="h-32">
      <nav className="bg-white border-gray-200 bg-white h-32 z-50 fixed w-full" style={{ zIndex: 9999 }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <div className="flex items-center">
            <Image src="/BQP_Logo.png" alt="logo-image" width={80} height={80} className="ml-4" />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-800">BosonQ Psi</h1>
              <h3 className="text-lg text-black">Enabling Simulations with Quantum Paradigms</h3>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-4 font-medium">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:bg-blue-100 text-black-500 hover:text-gray-800 px-3 py-2 rounded-md">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100 px-3 py-2 rounded-md">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/career" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100 px-3 py-2 rounded-md">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/newsroom" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100 px-3 py-2 rounded-md">News</a>
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4 ml-4">
              <Link href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-800">
                <Image src="/assets/Twitter.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-800">
                <Image src="/assets/Instagram.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-800">
                <Image src="/assets/LinkedIn.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-800">
                <Image src="/assets/YouTube.png" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
          {isMobile && (
            <div className="absolute top-0 right-0 m-4">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                onClick={handleToggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          )}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } ${isMobile ? 'w-full' : 'md:w-auto'}`}
            id="navbar-dropdown"
          >
            <ul
              className={`flex flex-col font-medium p-4 ${
                isMobile ? 'mt-16' : 'md:mt-0'
              } border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white bg-white`}
            >
              {/* Your navigation items */}
              <li>
                <Link href="/" legacyBehavior>
                  <a className=" hover:bg-blue-100 text-black-500 hover:text-gray-800">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/career" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/newsroom" legacyBehavior>
                  <a className="text-black-500 hover:text-gray-800 hover:bg-blue-100">News</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;