import { Shield, Lock, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroContent = [
  {
    title: "ЗАЩИТА ОБЪЕКТОВ КРИТИЧЕСКОЙ ИНФОРМАЦИОННОЙ ИНФРАСТРУКТУРЫ",
    subtitle: "/Категорирование/Аудит защищенности/Проектирование, внедрение, сопровождение систем защиты",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
  },
  {
    title: "Защита государственных информационных систем",
    subtitle: "Защита и сопровождение ресурсов государственных и региональных информационных систем и их абонентов",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "Аудит банков и финансовых организаций",
    subtitle: "Независимый аудит информационной безопасности Банков в соответствии с требованиями установленными Центральным Банком РФ",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
  },
  {
    title: "Импортозамещение",
    subtitle: "Осуществление проектов по переходу на отечественное программное обеспечение",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
  },
  {
    title: "Защищаем Ваш бизнес",
    subtitle: "Защищаем от современных кибер-угроз, утечек информации, шифровальщиков, DDoS-атак",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80"
  },
  {
    title: "Победители в номинации «Лучший ИТ-проект в сфере информационной безопасности»",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    // Предзагрузка изображений
    const preloadImages = async () => {
      const currentImage = heroContent[currentSlide].image;
      const nextIndex = (currentSlide + 1) % heroContent.length;
      const nextImage = heroContent[nextIndex].image;

      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            resolve(src);
          };
          img.onerror = reject;
        });
      };

      try {
        await loadImage(currentImage);
        loadImage(nextImage); // Предзагрузка следующего изображения
      } catch (error) {
        console.error('Failed to load image:', error);
      }
    };

    preloadImages();
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div id="home" className="relative bg-slate-900 pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90" />
        <img
          src={heroContent[currentSlide].image}
          alt="Background"
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            loadedImages.has(heroContent[currentSlide].image) ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition p-2"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition p-2"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className={`transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {heroContent[currentSlide].title}
              </h1>
              {heroContent[currentSlide].subtitle && (
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {heroContent[currentSlide].subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              ПОДРОБНЕЕ
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Комплексная защита</h3>
            <p className="text-gray-300">Многоуровневая система безопасности для вашей инфраструктуры</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <Lock className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Безопасность данных</h3>
            <p className="text-gray-300">Защита конфиденциальной информации на всех уровнях</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <Server className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Мониторинг 24/7</h3>
            <p className="text-gray-300">Круглосуточное наблюдение за безопасностью систем</p>
          </div>
        </div>
      </div>
    </div>
  );
}