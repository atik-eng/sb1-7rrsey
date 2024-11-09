import { useState } from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallbackModal from './CallbackModal';
import DropdownMenu from './NavMenu/DropdownMenu';
import { menuItems } from './NavMenu/menuData';
import { LogoIcon } from './Icons/Header';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <nav className="bg-slate-900 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <LogoIcon variant="light" className="transform -translate-y-1" />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <a
                      href={`#${item.label.toLowerCase()}`}
                      className="text-gray-300 hover:text-white text-sm font-medium tracking-wider whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                    <DropdownMenu
                      section={item}
                      isOpen={activeMenu === item.label}
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="flex items-center bg-slate-800 rounded-lg">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="bg-transparent text-sm text-white pl-4 pr-10 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  />
                  <Search className="h-5 w-5 text-gray-400 absolute right-3" />
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-300 whitespace-nowrap">
                  <Phone className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm">+7 (495) 123-45-67</span>
                </div>
                <button
                  onClick={() => setIsCallbackModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
              </div>
            </div>
            
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="flex items-center text-gray-300 mb-2">
                  <Phone className="h-5 w-5 text-blue-500 mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <button
                  onClick={() => setIsCallbackModalOpen(true)}
                  className="w-full bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </>
  );
}