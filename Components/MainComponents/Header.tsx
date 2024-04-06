// Header.tsx

import Link from 'next/link';

import Image from 'next/image';

import { useState, useEffect } from 'react';



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);



  const toggleMenu = () => {

    setIsOpen(!isOpen);

  };



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.pageYOffset > 0);

    };



    window.addEventListener('scroll', handleScroll);



    return () => {

      window.removeEventListener('scroll', handleScroll);

    };

  }, []);



  return (

    <header

      className={`bg-white text-black py-4 px-6 flex items-center justify-between fixed w-full z-50 transition-all duration-300 ${

        isScrolled ? 'shadow-md' : ''

      }`}

    >

      <div className="flex items-center">

        <Image

          src="/BQP_Logo.png"

          alt="Company Logo"

          width={50}

          height={50}

          className="mr-4"

        />

        <div>

          <h1 className="text-xl font-bold">BosonQ Psi</h1>

          <p className="text-sm">Powering Tomorrow&apos;s, Enginnering Today</p>

        </div>

      </div>

      <nav className="hidden md:block">

        <ul className="flex space-x-4">

          <li>

            <Link href="/" className="hover:text-gray-600">

              Home

            </Link>

          </li>

          <li>

            <Link href="/about" className="hover:text-gray-600">

              About Us

            </Link>

          </li>

          <li>

            <Link href="/carrer" className="hover:text-gray-600">

              Careers

            </Link>

          </li>

          <li>

            <Link href="/newsroom" className="hover:text-gray-600">

              NewsRoom

            </Link>

          </li>

        </ul>

      </nav>

      <div className="md:hidden">

        <button

          onClick={toggleMenu}

          className="focus:outline-none text-black hover:text-gray-600"

        >

          <svg

            className="h-6 w-6 fill-current"

            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 24 24"

          >

            {isOpen ? (

              <path

                fillRule="evenodd"

                clipRule="evenodd"

                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"

              />

            ) : (

              <path

                fillRule="evenodd"

                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"

              />

            )}

          </svg>

        </button>

      </div>

      <div

        className={`${

          isOpen ? 'block' : 'hidden'

        } md:hidden bg-white w-full absolute left-0 p-4 shadow-md`}

      >

        <ul className="space-y-2">

        <li>

            <Link href="/" className="hover:text-gray-600">

              Home

            </Link>

          </li>

          <li>

            <Link href="/about" className="block hover:text-gray-600">

              Careers

            </Link>

          </li>

          <li>

            <Link href="/newsroom" className="hover:text-gray-600">

              NewsRoom

            </Link>

          </li>

        </ul>

      </div>

    </header>

  );

};



export default Header;