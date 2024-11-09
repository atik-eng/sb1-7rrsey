import { CarouselSlide as SlideType } from '../../types/carousel';
import { Link } from 'react-router-dom';

interface CarouselSlideProps {
  slide: SlideType;
  isActive: boolean;
}

export default function CarouselSlide({ slide, isActive }: CarouselSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={slide.image}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: slide.overlayOpacity / 100 }}
        />
        <div className="relative text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {slide.title}
          </h2>
          <p className="text-2xl text-white mb-10 drop-shadow-lg">
            {slide.subtitle}
          </p>
          <Link
            to={slide.buttonLink}
            className="inline-block bg-blue-600/90 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
          >
            {slide.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}