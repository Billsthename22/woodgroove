// components/ImageCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/cityscape.jpg',
  '/interior.jpg',
  '/exterior1.jpg',
  '/exterior2.jpg',
];

const ImageCourasel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000); // 5 seconds per slide
      return () => clearInterval(interval);
    }, []);
  
   
  return (
    <div className="relative h-screen w-full overflow-hidden">
    {images.map((src, index) => (
      <div
        key={index}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <Image
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>
    ))}

    <div className="absolute inset-0 bg-[#0e1a2b]/70 z-20 flex flex-col justify-center items-center text-center px-4 text-[#f9f6f1]">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Live Elevated</h2>
      <p className="text-lg md:text-xl mb-6">Smart urban living for a greener tomorrow.</p>
      <a
        href="/projects"
        className="bg-[#c5a253] hover:bg-[#b09045] px-6 py-3 rounded text-[#0e1a2b] font-semibold"
      >
        Explore Projects
      </a>
    </div>
  </div>
  )
}

export default ImageCourasel