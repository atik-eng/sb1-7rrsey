import { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

interface DropdownMenuProps {
  section: MenuSection;
  isOpen: boolean;
}

export default function DropdownMenu({ section, isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute left-0 mt-0 w-80 bg-white shadow-lg rounded-lg z-50 overflow-hidden"
      style={{ 
        top: '100%',
        maxHeight: 'calc(100vh - 120px)'
      }}
    >
      <div className="overflow-y-auto" style={{ maxHeight: 'inherit' }}>
        {section.items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors group border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-start space-x-3">
              <item.icon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-500 leading-snug mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}