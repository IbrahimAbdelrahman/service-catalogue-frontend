import React from 'react';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface SidebarProps {
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const menuItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'teams', label: 'Teams', icon: '👥' },
    { id: 'squads', label: 'Squads', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '📋' },
    { id: 'services', label: 'Services', icon: '🔧' },
    { id: 'members', label: 'Members', icon: '👤' },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                activeItem === item.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
