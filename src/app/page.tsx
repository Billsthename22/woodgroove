'use client';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Testimonials from './components/testimonial';
import Counters from './components/Counters';
import WhyChooseUs from './components/WhyChooseUs';
import FadeInSection from './components/FaseInSection';
import ImageCarousel from './components/ImageCourasel';
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <FadeInSection>
      <FadeInSection>
  <ImageCarousel />
</FadeInSection>

      </FadeInSection>

      {/* About */}
      <FadeInSection>
        <section id="about" className="py-20 text-center bg-[#F5EFE6]">
          <h3 className="text-3xl font-bold text-[#1B1F3B] mb-4">About Woodgroove Realtors</h3>
          <p className="max-w-2xl mx-auto text-[#2C2C2C]">
            Woodgroove Realtors is a trusted real estate company specializing in the sale of premium ready-made properties to individuals, families, and investors. We offer move-in-ready homes and developments in prime locations, combining quality craftsmanship with modern living standards.
          </p>
        </section>
      </FadeInSection>

      {/* Counters */}
      <FadeInSection>
        <Counters />
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      {/* Contact */}
      <FadeInSection>
        <section id="contact" className="py-20 bg-[#F5EFE6] text-center">
          <h3 className="text-3xl font-bold text-[#1B1F3B] mb-4">Stay In Touch</h3>
          <p className="text-[#2C2C2C] mb-8">Join our mailing list for early access and updates.</p>
          <form className="max-w-lg mx-auto flex flex-col md:flex-row items-center gap-4 px-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded border w-full text-black"
              required
            />
            <button className="bg-[#B87333] hover:bg-[#a1602a] text-white px-6 py-3 rounded w-full md:w-auto font-semibold">
              Subscribe
            </button>
          </form>
        </section>
      </FadeInSection>

      <Footer />
    </>
  );
}
