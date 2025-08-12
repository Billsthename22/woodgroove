'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MeetTheTeam from '../components/MeetTheTeam';
import CounterBox from '../components/CounterBox';
import FadeInSection from '../components/FaseInSection';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <FadeInSection>
        {/* Hero Banner */}
        <section className="relative h-[60vh] flex items-center justify-center bg-[url('/images/about-hero.jpg')] bg-cover bg-center text-white text-center px-4">
          <div className="bg-[#1B1F3B]/80 w-full h-full absolute top-0 left-0 z-0" />
          <div className="z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Woodgroove Realtors</h1>
            <p className="text-lg md:text-xl">
              Your trusted partner for ready-made homes in Nigeria&apos;s most vibrant neighborhoods.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Our Story */}
        <section className="py-20 bg-[#F5EFE6] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Our Story</h2>
            <p className="text-[#2C2C2C] text-lg">
              Woodgroove Realtors was established to make home ownership accessible, stress-free, and transparent.
              Since our founding, we&apos;ve helped hundreds of families and investors own secure, ready-to-move-in properties across Lagos and beyond.
              We combine deep market knowledge with a passion for excellence, ensuring every client feels confident and cared for.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* What We Do */}
        <section className="py-20 bg-white text-center px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1B1F3B] mb-10">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F5EFE6] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#B87333] mb-2">🏘 Ready-Made Homes</h3>
                <p className="text-[#2C2C2C]">We offer modern, move-in-ready homes in secure and desirable locations.</p>
              </div>
              <div className="bg-[#F5EFE6] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#B87333] mb-2">🧱 New Developments</h3>
                <p className="text-[#2C2C2C]">Access early investment opportunities in our premium real estate developments.</p>
              </div>
              <div className="bg-[#F5EFE6] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#B87333] mb-2">🤝 End-to-End Support</h3>
                <p className="text-[#2C2C2C]">From property tours to documentation, we guide you every step of the way.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Meet the Team */}
        <MeetTheTeam />
      </FadeInSection>

      <FadeInSection>
        {/* Trust Metrics */}
        <section className="py-16 bg-[#EAE4DA] text-center">
          <h2 className="text-3xl font-bold text-[#1B1F3B] mb-10">Why People Trust Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <CounterBox target={100} label="Homes Sold" />
            <CounterBox target={5} label="Years Experience" />
            <CounterBox target={10} label="Locations Covered" />
            <CounterBox target={100} label="Client Satisfaction (%)" />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Call to Action */}
        <section className="py-20 bg-[#F5EFE6] text-center px-4">
          <h2 className="text-3xl font-bold text-[#1B1F3B] mb-6">Ready to Own Your Dream Home?</h2>
          <p className="text-[#2C2C2C] mb-8 max-w-xl mx-auto">
            Contact Woodgroove Realtors today and take the first step toward owning a home you&apos;ll love for years to come.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#B87333] hover:bg-[#a1602a] text-white px-6 py-3 rounded font-medium transition"
          >
            Get in Touch
          </Link>
        </section>
      </FadeInSection>

      <Footer />
    </>
  );
}
