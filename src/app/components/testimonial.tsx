'use client';

const testimonials = [
  { name: 'Ada E., Lekki', quote: 'Woodgroove Realtors made buying my first home feel effortless.' },
  { name: 'Tunde O., Ikoyi', quote: 'Beautiful interiors, great locations. Great support.' },
  { name: 'Chioma N., VI', quote: 'Sustainable and smart homes. Worth every kobo!' },
  { name: 'Kelechi A., Abuja', quote: 'Woodgroove Realtors made my investment dreams real.' },
  { name: 'Funmi B., Lekki', quote: 'Quick, transparent and reliable—what more could I ask?' },
  { name: 'Obinna M., Ikeja', quote: 'Buying a home has never been easier or faster.' },
  // Repeat for smooth loop
  { name: 'Ada E., Lekki', quote: 'Woodgroove Realtors made buying my first home feel effortless.' },
  { name: 'Tunde O., Ikoyi', quote: 'Beautiful interiors, great locations. Great support.' },
  { name: 'Chioma N., VI', quote: 'Sustainable and smart homes. Worth every kobo!' },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-[#1c1c1e]">What Our Clients Say</h3>
        <p className="text-[#7a7a7a]">Real experiences from real buyers</p>
      </div>

      <div className="relative w-full">
        <div className="animate-marquee flex gap-6 w-max px-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#e0e0e0] rounded-xl shadow-sm p-6 w-80 shrink-0"
            >
              <p className="text-[#444] italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 font-semibold text-[#a2832f]">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
