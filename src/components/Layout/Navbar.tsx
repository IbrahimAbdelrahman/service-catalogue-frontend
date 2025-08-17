import React from 'react';

interface NavbarProps {
  userName: string;
  userAvatar?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName, userAvatar }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Service Catalogue</h1>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">Admin Portal</p>
          </div>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {userName.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
