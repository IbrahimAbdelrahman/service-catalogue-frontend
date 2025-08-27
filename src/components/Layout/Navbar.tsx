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
          <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-3 p-1 bg-transparent">
            <img
              src="public/images/Vodafone_logo.svg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-l font-semibold text-red-600">
            Service Catalogue
          </h1>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          {/* User image */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent">
            <img
              src={userAvatar || 'public/images/yasmine saber.svg'}
              alt={userName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* User name */}
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
