import React, { useState } from 'react';

interface DashboardHeaderProps {
  userInitials?: string;
}

/**
 * Responsive dashboard header with logo, nav links, and user avatar.
 * On mobile, show hamburger menu instead of full nav.
 */
export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userInitials = 'U' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            PSLTP
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Portfolio</a>
            <a href="#" className="hover:text-blue-600">Trades</a>
            <a href="#" className="hover:text-blue-600">Algorithms</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            
            {/* Hamburger button (mobile only) */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>

            {/* Avatar */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {userInitials}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Portfolio
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Trades
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Algorithms
            </a>
          </div>
        )}
      </div>
    </header>
  );
};