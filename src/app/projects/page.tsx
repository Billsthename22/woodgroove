'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FadeInSection from '../components/FaseInSection';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Olive Heights, Lekki',
      location: 'Lekki Phase 1, Lagos',
      description: 'Luxury 3-bedroom apartments with smart-home features and 24/7 security.',
      contact: 'Call +234 801 234 5678',
    },
    {
      name: 'Sandstone Villas',
      location: 'Gwarinpa, Abuja',
      description: 'Modern duplexes ideal for growing families in a secure gated estate.',
      contact: 'Email: info@woodgroove.ng',
    },
    {
      name: 'Champagne Courts',
      location: 'Oniru, Victoria Island',
      description: 'Executive serviced apartments with rooftop lounges and ocean views.',
      contact: 'WhatsApp: +234 809 876 5432',
    },
    {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      },
      {
        name: 'Champagne Courts',
        location: 'Oniru, Victoria Island',
        description: 'Executive serviced apartments with rooftop lounges and ocean views.',
        contact: 'WhatsApp: +234 809 876 5432',
      }
  ];

  return (
    <>
      <Navbar />
     {/* Top Banner Section */}
     <FadeInSection>
        <section className="relative h-[50vh] flex items-center justify-center bg-[url('/images/projects-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0e1a2b]/80 z-0" />
          <div className="relative z-10 text-center text-[#f9f6f1] px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Available Properties</h1>
            <p className="text-lg md:text-xl">Modern homes in prime Nigerian locations</p>
          </div>
        </section>
      </FadeInSection>

      {/* Property Grid Section */}
      <FadeInSection>
        <section className="py-20 bg-[#f9f6f1] px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0e1a2b] mb-10">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0e1a2b]">{project.name}</h3>
                <p className="text-sm text-[#666] italic mb-2">{project.location}</p>
                <p className="text-[#2c2c2c] mb-4">{project.description}</p>
                <p className="text-[#c5a253] font-medium">{project.contact}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <Footer />
    </>
  );
}
