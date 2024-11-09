import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  disabled: boolean;
}

export default function CarouselNavigation({ onPrevClick, onNextClick, disabled }: CarouselNavigationProps) {
  return (
    <>
      <button
        onClick={onPrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        disabled={disabled}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={onNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        disabled={disabled}
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </>
  );
}