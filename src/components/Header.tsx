import React, { useState } from 'react';
import { Menu, Search, User, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger Menu (Mobile) */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <div className="flex items-center">
          <Youtube className="h-8 w-8 mr-2 text-red-500" />
          <span className="font-bold text-lg">YouTube</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-l-full border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-blue-500"
          />
          <Button variant="default" size="sm" className="rounded-r-full bg-gray-700 hover:bg-gray-600 border-none">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile */}
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-gray-900 border-t border-gray-700">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500 mb-2"
          />
          {/* Add more mobile menu items here */}
        </div>
      )}
    </header>
  );
};

export default Header;
