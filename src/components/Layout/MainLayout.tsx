import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  userName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, userName = 'Admin User' }) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');

  const handleSidebarItemClick = (itemId: string) => {
    setActiveSidebarItem(itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar - Always visible */}
      <Navbar userName={userName} />
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <Sidebar 
          activeItem={activeSidebarItem} 
          onItemClick={handleSidebarItemClick} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
