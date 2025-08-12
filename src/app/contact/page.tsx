'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FadeInSection from '../components/FaseInSection';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <FadeInSection>
        <section
          className="relative h-[50vh] flex items-center justify-center bg-[url('/images/contact-hero.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[#0e1a2b]/80 z-0" />
          <div className="relative z-10 text-center text-[#f9f6f1] px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg md:text-xl">Let&apos;s help you find your dream home</p>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section className="py-20 bg-[#f9f6f1] px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-[#2c2c2c]">
              <h2 className="text-3xl font-bold text-[#0e1a2b] mb-6">Get In Touch</h2>
              <p>
                Whether you&apos;re looking to buy, invest, or just have a few questions — we&apos;re always happy to help.
              </p>

              <div className="space-y-4">
                <p>
                  📍 <span className="font-medium">Office:</span> 12 Sandstone Boulevard, Lekki, Lagos
                </p>
                <p>
                  📞 <span className="font-medium">Phone:</span> +234 809 123 4567
                </p>
                <p>
                  📧 <span className="font-medium">Email:</span> info@woodgroove.ng
                </p>
                <p>
                  🕒 <span className="font-medium">Hours:</span> Mon–Fri 9:00am – 6:00pm
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-8 rounded-xl shadow space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border px-4 py-3 rounded w-full text-[#0e1a2b]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="border px-4 py-3 rounded w-full text-[#0e1a2b]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="border px-4 py-3 rounded w-full text-[#0e1a2b]"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="border px-4 py-3 rounded w-full text-[#0e1a2b]"
              />
              <button
                type="submit"
                className="bg-[#c5a253] hover:bg-[#b09045] text-[#0e1a2b] font-semibold px-6 py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </FadeInSection>

      <Footer />
    </>
  );
}
