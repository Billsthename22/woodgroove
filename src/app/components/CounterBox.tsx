'use client';
import { useEffect, useState } from 'react';

interface CounterBoxProps {
  target: number;
  label: string;
}

export default function CounterBox({ target, label }: CounterBoxProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = target / 100;
    const updateCount = () => {
      if (start < target) {
        start += Math.ceil(speed);
        setCount(prev => (start >= target ? target : start));
        setTimeout(updateCount, 20);
      }
    };
    updateCount();
  }, [target]);

  return (
    <div>
      <p className="text-4xl font-bold text-[#B87333]">{count}+</p>
      <p className="text-[#1B1F3B]">{label}</p>
    </div>
  );
}
