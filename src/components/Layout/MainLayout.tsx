import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  userName?: string;
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  userName = "Admin User",
  activeItem,
  onItemClick
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar userName={userName} />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <Sidebar 
          activeItem={activeItem} 
          onItemClick={onItemClick} 
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
