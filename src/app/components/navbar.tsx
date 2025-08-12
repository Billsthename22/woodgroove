'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#1c1c1e] shadow-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#d4af37]">Woodgroove Realtors</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#d4af37] transition-colors duration-200">Home</Link>
          <Link href="/about" className="hover:text-[#d4af37] transition-colors duration-200">About</Link>
          <a href="/projects" className="hover:text-[#d4af37] transition-colors duration-200">Projects</a>
          <a href="/contact" className="hover:text-[#d4af37] transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}
