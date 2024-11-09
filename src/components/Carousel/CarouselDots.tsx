interface CarouselDotsProps {
  totalSlides: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  isTransitioning: boolean;
}

export default function CarouselDots({ totalSlides, currentIndex, onDotClick, isTransitioning }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => !isTransitioning && onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
          }`}
        />
      ))}
    </div>
  );
}