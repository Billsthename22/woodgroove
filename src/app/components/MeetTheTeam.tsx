'use client';

import Image from 'next/image';

export default function MeetTheTeam() {
  const team = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: '/images/team1.jpg',
      bio: 'Visionary leader with a passion for sustainable property development and client-first service.',
    },
    {
      name: 'John Smith',
      role: 'Head of Sales',
      image: '/images/team2.jpg',
      bio: 'With deep market knowledge, John helps clients find the perfect home with ease and confidence.',
    },
    {
      name: 'Mary Johnson',
      role: 'Customer Success Lead',
      image: '/images/team3.jpg',
      bio: 'Mary ensures a smooth, transparent, and joyful journey for every Woodgroove client.',
    },
  ];

  return (
    <section className="py-20 bg-[#f5f5f5] text-center px-4">
      <h2 className="text-3xl font-bold text-[#1c1c1e] mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-[#ddd] hover:shadow-lg transition"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={128}    // match your previous w-32 (128px)
              height={128}   // match your previous h-32 (128px)
              className="mx-auto rounded-full mb-4 object-cover border-4 border-[#d4af37]"
              priority={false}
            />
            <h3 className="text-xl font-semibold text-[#1c1c1e]">{member.name}</h3>
            <p className="text-sm text-[#a0802a] font-medium">{member.role}</p>
            <p className="mt-2 text-[#444] text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
