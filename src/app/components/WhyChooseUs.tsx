'use client';

import { ShieldCheck, Handshake, Home, TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'Integrity',
    icon: <ShieldCheck className="h-10 w-10 text-[#a2832f] mb-3" />,
    description:
      'We operate with complete transparency and honesty in all transactions and client interactions.',
  },
  {
    title: 'Customer Focus',
    icon: <Handshake className="h-10 w-10 text-[#a2832f] mb-3" />,
    description:
      'We prioritize your needs and satisfaction, offering support every step of the way.',
  },
  {
    title: 'Quality Properties',
    icon: <Home className="h-10 w-10 text-[#a2832f] mb-3" />,
    description:
      'We sell only premium, ready-to-move-in properties in secure and growing neighborhoods.',
  },
  {
    title: 'Reliable Investment',
    icon: <TrendingUp className="h-10 w-10 text-[#a2832f] mb-3" />,
    description:
      'Our properties offer strong long-term value, both for homeowners and investors.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-[#f5f5f5] text-center">
      <h3 className="text-3xl font-bold text-[#1c1c1e] mb-10">Why Choose Woodgroove Realtors?</h3>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center text-center border border-[#e0e0e0] hover:shadow-md transition"
          >
            {item.icon}
            <h4 className="text-xl font-semibold text-[#1c1c1e] mb-2">{item.title}</h4>
            <p className="text-[#4b4b4b]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
