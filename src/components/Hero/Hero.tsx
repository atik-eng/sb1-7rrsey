import { useState, useEffect } from 'react';
import { heroSlides } from './data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={heroSlides[currentSlide].backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}