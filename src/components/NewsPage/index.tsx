import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { newsData } from '../News/newsData';

export default function NewsPage() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific news item if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">НОВОСТИ</h1>
        
        <div className="space-y-12">
          {newsData.map((news) => (
            <article
              key={news.id}
              id={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-video md:aspect-square relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{news.content}</p>
                  <time className="text-sm text-gray-500">
                    {new Date(news.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}