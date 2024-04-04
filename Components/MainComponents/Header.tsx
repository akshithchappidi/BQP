// components/MainComponent/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white  fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/BQP_Logo.png" alt="Company Logo" className="h-32 w-auto px-16" />
        </div>
        {/* <h1 className="text-3xl font-bold text-center text-black">BosonQ Psi</h1> */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-3xl text-black px-8">Home</Link>
          </li>
          <li>
            <Link href="/career" className="text-3xl text-black px-4">Career</Link>
          </li>
          {/* <li>
            <Link href="/products" className="text-xl">Products</Link>
          </li> */}
          <li>
            <Link href="/about" className="text-3xl text-black px-4">About Us</Link>
          </li>
          <li>
            <Link href="/newsroom" className="text-3xl text-black px-2">News Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;