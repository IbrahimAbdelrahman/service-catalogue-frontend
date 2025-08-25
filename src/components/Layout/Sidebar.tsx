import React from 'react';

interface SidebarItem {
  id: string;
  label: string;
  icon: string; // Now this will be the image path
  active?: boolean;
}

interface SidebarProps {
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const menuItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'public/images/DashBoard.svg' },
    { id: 'teams', label: 'Teams', icon: 'public/images/Teams.svg' },
    { id: 'squads', label: 'Squads', icon: 'public/images/Squad.svg' },
    { id: 'projects', label: 'Projects', icon: 'public/images/Projects.svg' },
    { id: 'services', label: 'Services', icon: 'public/images/Services.svg' },
    { id: 'members', label: 'Members', icon: 'public/images/Members.svg' },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-full">
      <div className="p-6">
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
              <span className="w-6 h-6 flex items-center justify-center">
                <img src={item.icon} alt={item.label + ' icon'} className="w-6 h-6 object-contain" />
              </span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;