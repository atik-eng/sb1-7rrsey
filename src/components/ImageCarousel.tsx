import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'ЗАЩИТА ОБЪЕКТОВ КРИТИЧЕСКОЙ ИНФОРМАЦИОННОЙ ИНФРАСТРУКТУРЫ',
    subtitle: 'Категорирование, аудит защищенности, проектирование и внедрение систем защиты'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'Защита государственных информационных систем',
    subtitle: 'Защита и сопровождение ресурсов государственных и региональных информационных систем'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'Аудит банков и финансовых организаций',
    subtitle: 'Независимый аудит информационной безопасности в соответствии с требованиями ЦБ РФ'
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'Импортозамещение',
    subtitle: 'Осуществление проектов по переходу на отечественное программное обеспечение'
  },
  {
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'Защищаем Ваш бизнес',
    subtitle: 'Защита от современных кибер-угроз, утечек информации и DDoS-атак'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1920&h=1080',
    title: 'Лучший ИТ-проект в сфере информационной безопасности',
    subtitle: 'Признание экспертизы и инновационного подхода в области кибербезопасности'
  }
];

export default function ImageCarousel() {
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
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    startTimer();
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-2xl text-white mb-10 drop-shadow-lg">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600/90 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm">
                ПОДРОБНЕЕ
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}