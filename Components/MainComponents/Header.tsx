// Header.tsx
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white text-black py-2 px-6 flex items-center justify-between fixed w-full z-50 transition-all duration-300">
      <div className="flex justify-between">
        <Image
          src="/BQP_Logo.png"
          alt="Company Logo"
          width={100}
          height={100}
          className="mr-4"
        />

      </div>
      <nav className="block justify-right pl-86">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-600 text-xl pr-8" >
            Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 text-xl pr-8">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/career" className="hover:text-gray-600 text-xl pr-8">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/newsroom" className="hover:text-gray-600 text-xl">
              NewsRoom
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;