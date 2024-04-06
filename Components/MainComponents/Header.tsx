// Header.tsx
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-6 flex items-center justify-between fixed w-full z-50 transition-all duration-300">
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
      <nav className="block">
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
    </header>
  );
};

export default Header;