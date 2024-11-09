import { useState, useEffect, useRef } from 'react';
import { carouselSlides } from '../../data/carouselData';
import CarouselSlide from './CarouselSlide';
import CarouselNavigation from './CarouselNavigation';
import CarouselDots from './CarouselDots';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    startTimer();
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    startTimer();
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <CarouselNavigation
        onPrevClick={handlePrev}
        onNextClick={handleNext}
        disabled={isTransitioning}
      />

      {carouselSlides.map((slide, index) => (
        <CarouselSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentIndex}
        />
      ))}

      <CarouselDots
        totalSlides={carouselSlides.length}
        currentIndex={currentIndex}
        onDotClick={handleDotClick}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}