'use client';

import { useEffect } from 'react';

export default function Counters() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animate = () => {
      counters.forEach((counter) => {
        const update = () => {
          const target = +counter.getAttribute('data-target')!;
          const count = +counter.innerHTML;
          const increment = target / speed;

          if (count < target) {
            counter.innerHTML = Math.ceil(count + increment).toString();
            setTimeout(update, 10);
          } else {
            counter.innerHTML = target.toString();
          }
        };
        update();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect(); // Run only once
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('.counter-box').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="py-16 bg-[#f5f5f5] text-center">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="counter-box">
          <div className="text-4xl font-bold text-[#B87333] counter" data-target="120">0</div>
          <p className="text-sm text-[#1C1C1E]">Homes Built</p>
        </div>
        <div className="counter-box">
          <div className="text-4xl font-bold text-[#B87333] counter" data-target="15">0</div>
          <p className="text-sm text-[#1C1C1E]">Developments</p>
        </div>
        <div className="counter-box">
          <div className="text-4xl font-bold text-[#B87333] counter" data-target="5000">0</div>
          <p className="text-sm text-[#1C1C1E]">Square Meters</p>
        </div>
        <div className="counter-box">
          <div className="text-4xl font-bold text-[#B87333] counter" data-target="24">0</div>
          <p className="text-sm text-[#1C1C1E]">Months of Support</p>
        </div>
      </div>
    </section>
  );
}
