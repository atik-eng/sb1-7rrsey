import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 font-bold text-xl">CyberGuard</span>
            </div>
            <p className="text-gray-400">
              Ваш надежный партнер в области информационной безопасности
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Аудит безопасности</li>
              <li>Защита от угроз</li>
              <li>Облачная безопасность</li>
              <li>Обучение персонала</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>О нас</li>
              <li>Команда</li>
              <li>Карьера</li>
              <li>Блог</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@cyberguard.ru</li>
              <li>+7 (495) 123-45-67</li>
              <li>Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CyberGuard. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}