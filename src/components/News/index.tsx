import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from './newsData';

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Create a circular array with additional items on both ends
  const items = [...newsData.slice(-4), ...newsData, ...newsData.slice(0, 4)];
  const offset = 4; // Number of additional items at start/end

  useEffect(() => {
    if (!slideContainerRef.current) return;
    
    // Initial position
    slideContainerRef.current.style.transition = 'none';
    slideContainerRef.current.style.transform = `translateX(-${(offset + currentIndex) * 25}%)`;
    // Force reflow
    slideContainerRef.current.offsetHeight;
    slideContainerRef.current.style.transition = 'transform 300ms ease-in-out';
  }, []);

  const handleTransitionEnd = () => {
    if (!slideContainerRef.current) return;

    // If we've moved past the original items
    if (currentIndex >= newsData.length) {
      slideContainerRef.current.style.transition = 'none';
      setCurrentIndex(0);
      slideContainerRef.current.style.transform = `translateX(-${offset * 25}%)`;
      // Force reflow
      slideContainerRef.current.offsetHeight;
      slideContainerRef.current.style.transition = 'transform 300ms ease-in-out';
    }
    // If we've moved before the original items
    else if (currentIndex < 0) {
      slideContainerRef.current.style.transition = 'none';
      setCurrentIndex(newsData.length - 1);
      slideContainerRef.current.style.transform = `translateX(-${(offset + newsData.length - 1) * 25}%)`;
      // Force reflow
      slideContainerRef.current.offsetHeight;
      slideContainerRef.current.style.transition = 'transform 300ms ease-in-out';
    }

    setIsTransitioning(false);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${(offset + currentIndex + 1) * 25}%)`;
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${(offset + currentIndex - 1) * 25}%)`;
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/news" className="inline-block group">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors">
            НОВОСТИ
          </h2>
        </Link>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50 z-10"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <div
              ref={slideContainerRef}
              className="flex transition-transform duration-300 ease-in-out"
              onTransitionEnd={handleTransitionEnd}
            >
              {items.map((news, index) => (
                <div
                  key={`${news.id}-${index}`}
                  className="w-1/4 px-3 flex-shrink-0"
                >
                  <Link
                    to={`/news#${news.id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="p-4 text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50 z-10"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning && slideContainerRef.current) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  slideContainerRef.current.style.transform = `translateX(-${(offset + index) * 25}%)`;
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                ((currentIndex % newsData.length) + newsData.length) % newsData.length === index
                  ? 'bg-blue-600 w-4'
                  : 'bg-gray-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}